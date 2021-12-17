---
accordion_page: Home
order: 6
title: Creating the Service Worker
---

## Creating the Service Worker
{: .h2.mb-4}

<br>

Now let's dig into the details of creating our service worker, registering and installing them, and caching assets.
{: .p.mb-4}

<br>

### `registerServiceWorker.js`{: .code} Module
{: .h3.mb-4}

To create the code that will register our service worker, I created a new JS file named `registerServiceWorker.js`{: .code}. I created a default export function with the same name as the module filename (i.e. `function registerServiceWorker()`{: .code}):
{: .p}

```javascript
function registerServiceWorker () {

}

export default registerServiceWorker;
```

Let's use this module to register our service worker which will be named `./serviceworker.js`{: .code}, 
and will be located in the project's root. When registering a service worker you also define it's scope. It's 
scope is simply where, within the websites directory structure, the worker is allowed to operate.
{: .p}

**The service worker has to be in the project's root so that its' scope can
include all the files hosted from the site's origin.** If the service worker's JS file were within a subfolder, 
the worker's scope would be limited to that directory (and it's subdirectories.) 
{: .p}

To do the registration we need to use the \
`navigator.serviceWorker.register('./<SERVICE_WORKER_FILE>.js', { scope: './' })`{: .code} method, 
where the first parameter is the service worker's filename/location. The second (optional) parameter is an 
object used to configure the worker's scope.
{: .p}

**Be sure to ues any `serviceWorker`{: .code} methods inside a check for service worker/browser compatibility.**
That way we won't break the website for user's who don't have service worker support in their browser. This also 
helps our website adhere to the progressive web app (PWA) philosophy of **progressive enhancement**. Users who
can support modern features (like service workers) will be able to utilize those feature which then _enhance_ their experience—all while ensuring that the underlying functionality is available to as many as possible.
{: .p}

```javascript
// File: `./assets/js/src/registerServiceWorker.js`

function registerServiceWorker () {
  // 1.) Check if the browser supports service worker:
  if ('serviceWorker' in navigator) {
    // 2. Register the worker:
    // We can omit the optional scope parameter, it will default to a scope matching the worker's parent folder (and any sub-folders.)
    navigator.serviceWorker.register('./serviceworker.js')
    .then((reg) => {
      // registration worked
      console.log('Registration succeeded. Scope is ' + reg.scope);
    }).catch((error) => {
      // registration failed
      console.log('Registration failed with ' + error);
    });
  }
}

export default registerServiceWorker;
```

Internally, service workers use Promises. This means we can tack on `.then()`{: .code} and `.catch()`{: .code} callbacks to 
run code after registration is successful and/or after an error.
{: .p}

The last thing to do is import this module into the bundle's entrypoint (`/assets/js/src/main/js`{: .code}.) Remember that 
service workers are not executed on the main JS thread, they run in the background on their own thread: 
{: .p}

```javascript
// File/location: `assets/js/src/main.js`
import '../../scss/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  // Do not run service workers (or our module) inside of a 'DOMContentLoaded' listener!!
  // Essential JS ...
});

window.addEventListener('load', () => {
  // Load the service worker's module after page load with the ES6 `import()` method.
  import('./registerServiceWorker')
    .then( ({default: registerServiceWorker}) => registerServiceWorker() ) // Define modules' default and execute right away
    .catch( (err) => console.error('Error loading module', err) )
});
```

If we wanted to be a little more clever, we could check for service worker compatibility before we ever import the module.
To do this, just remove the service worker check from `./registerServiceWorker.js`{: .code}, and add it into `./main.js`{: .code}, before we use the ES6 import:
{: .p}

<br>

<div class="card bg-info">
  <div class="card-header px-4">
    <h5 class="h5">Important Information</h5>
  </div>
  <div class="card-body px-4">
    <p class="p--darker"><strong>NOTE:</strong> The code block below shows edits on two files:
      <ul>
        <li><code class="code">registerServiceWorker.js</code></li>
        <li><code class="code">main.js</code></li>
      </ul>
      </p>
  </div>
</div>



<br>

```javascript
// Module that registers the service worker:
// File/location: `assets/js/src/registerServiceWorker.js`

function registerServiceWorker () {
  // Removed the: `if ( 'serviceWorker' in navigator )` check.
  navigator.serviceWorker.register('./serviceworker.js')
  .then((reg) => {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch((error) => {
    // registration failed
    console.log('Registration failed with ' + error);
  });
}

export default registerServiceWorker;
// End of module: registerServiceWorker.js
// ================================================= //

// Main entrypoint for JS bundle:
// File/location: `assets/js/src/main.js`

import '../../scss/main.scss';

window.addEventListener('load', () => {
  // Check for service worker compatibility so that users who don't need it...
  // won't unnecessarily import the module.
  if ('serviceWorker' in navigator) {
    import('./registerServiceWorker')
      .then(({ default: registerServiceWorker}) => registerServiceWorker())
      .catch((err) => console.error('Error loading module', err))
  }
})
```




<br>

### `./serviceworker.js`{: .code} File
{: .h3}

Finally, we can create our service worker file in the projects root. Let's create a basic service worker
setup with an `oninstall`{: .code} handler to cache files and an `onfetch`{: .code} handler to return network requests from 
the cache if it exists, otherwise make a regular network request:
{: .p}

```javascript
// 1.) Create an event listener for the install event:
self.addEventListener('install', (event) => {
  // 2.) Use the `ExtendableEvent.waitUntil({ //... })` method to do some caching after installation:
  event.waitUntil(
    // 3.) Open and give our cache a version name:
    caches.open('v1').then((cache) => {
      // 4.) Use `cache.addAll([...])` method and pass it an array of 
      //     origin-relative URLs of the resources to cache:
      return cache.addAll([
        './index.html',
        './404.html',
        './sitemap.xml'
        // More items to cache ...
      ]);
    });
  );
});

// 6.) Create a fetch event-listener to intercept any network requests:
self.addEventListener('fetch', (event) => {
  // 7.) Use `events.responsdWith()` to "hijack" the network requests
  event.respondWith(
    // 8.) Check the cache for a key matching the request
    caches.match(event.request).then((resp) => {
      // 9.) Return the cached item if it exists, otherwise use a normal fetch() call to get the request from the network
      return resp || fetch(event.request).then((response) => {
        // 10.) After a fetch() call, for any items not in the cache, open the cache and add the missing item
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response.clone());
          // 11.) Finally, hand off the response to be used by the document
          return response;
        });
      });
    })
  );
});
```





```javascript
// 1.) Create an event listener for the install event:
self.addEventListener('install', (event) => {
  // 2.) Use the `ExtendableEvent.waitUntil({ //... })` method to 
  event.waitUntil(
    fetch('/hash.json').then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((obj) => {
      const hash = obj.hash;
      console.log('Hash log 1: ' + hash);
      caches.open('v1').then((cache) => {
        return cache.addAll([
          './index.html',
          './404.html',
          `./assets/js/dist/main.${hash}.js`,
          `./assets/js/dist/main.${hash}.css`,
          `./assets/js/dist/29.${hash}.js`,
          `./assets/js/dist/314.${hash}.js`,
          `./assets/js/dist/671.${hash}.js`,
          `./assets/js/dist/909.${hash}.js`,
        ]);
      });
    })
    .catch((err) => {
      console.error(`Error in service worker's pre-install tasks: \n${err}`, err);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        return caches.open('v1').then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
```