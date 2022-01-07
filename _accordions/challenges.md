---
accordion_page: Home
order: 4
title: Challenges
---

## Service Workers Challenges
{: .h2.mb-4}

```ruby
 serviceworkers/
      |__ assets/
      |     |__ js/
      |         |__ dist/
      |         |     |-- 29.c1ffa09121e3327be06c.js
      |         |     |-- 314.c1ffa09121e3327be06c.js
      |         |     |-- 671.c1ffa09121e3327be06c.js
      |         |     |-- 909.c1ffa09121e3327be06c.js
      |         |     |-- main.c1ffa09121e3327be06c.css
      |         |     |__ main.c1ffa09121e3327be06c.js
      |         |
      |         |__ src/
      |              |-- main.js
      |              |__ registerServiceWorker.js
      |
      |__ serviceworkers.js
```

As you can see above, our cache-busting mechanism (using a random hash in JS and CSS filenames,) makes it a little challenging 
to cache those assets in a service worker. To cache the files in the service worker, we need the filenames and path&mdash;our filenames are not predictable. So I needed to find a way to pass 
the hash created by Webpack to the service worker.
{: .p}

My initial idea was to use the `navigator.serviceWorker.controller.postMessage()`{: .code} 
method to send the hash to the service worker. I would first need to get the bundle's hash into my custom JS file (and then 
hand it of to the service worker via `postMessage()`{: .code}.) Instead of creating another solution, I decided to 
utilize my existing custom Webpack plugin.
{: .p}

I would need to modify the Webpack plugin to be able to output two different files—one for the existing `_includes/hash.yml`{: .code}
file, and the second to create a new `hash.json`{: .code} file.
{: .p}

I could then access this `hash.json`{: .code} file from within my custom JS file that 
registers/installs the service worker. This, I thought, would allow me to send the hash
to the service worker using the `postMessage()`{: .code} method.
{: .p}


After much difficulty trying to get the `navigator.serviceWorker.controller.postMessage()`{: .code} method to 
hand off the hash, I decided I would go about the problem a little differently.
{: .p}

> For making a request and fetching a resource, use the fetch() method. 
> It is implemented in multiple interfaces, specifically Window and WorkerGlobalScope. 
> This makes it available in pretty much any context you might want to fetch resources in.
>
> <span class="source">Source: <https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#concepts_and_usage>{: target='_blank' rel='noopener noreferrer' }</span>


I remembered from reading a lot of Service Worker documentation on MDN, that the Fetch API is among the allowed
methods you can use from within a service worker&mdash;and that the synchronous `XMLHttpsRequest`{: .code} method 
would not work. So, instead of trying to hand-off the hash to the service worker, I thought it would be simpler 
to access the `hash.json`{: .code} file from the service worker context via `fetch()`{: .code}.
{: .p}

Adding a simple Fetch API call to the service worker's installation event is pretty simple:
{: .p}

```javascript
fetch('/hash.json').then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}).then((json) => {
  const hash = json.hash; // The hash is stored under the JSON object's hash key

  // Use the Webpack hash here
  console.log(hash);
  // Expected logged result: 'c1ffa09121e3327be06c' (or similar random string of the same length)
})
```
