---
title: Home
description:
baseurl: '/'
layout: default
---

# {{ site.title }}
{: .h1.mb-4}

## Overview
{: .h2.mb-4}

This project was developed for the purpose of implementing 
**service workers**, and other PWA functionality, into a specific 
**JAMStack architecture** that I use to develop at work.
{: .p}

The JAMStack architecture use at work is a `Jekyll`{: .code}, `Nodejs`{: .code}, 
`Webpack`{: .code} + `sass-laoder`{: .code} + `Corejs`{: .code} + `Babel`{: .code} +
`ES6`{: .code} ,  `SASS`{: .code}, etc....
{: .p}

The two most important APIs used include **Google Sheets v4** and **Google Docs**.
{: .p}

Our build process is handled using npm-scripts (<code class="code mx-1 code__bash">npm run <span class="code--blue">&lt;SCRIPT_NAME&gt;</span></code> ) 
and the npm package `npm-run-all`{: .code} which gives us the ability to run npm scripts sequentially and in-parallel.
{: .p}

Using `npm-run-all`{: .code} we are able to run our **Jekyll command** and **Webpack commands** in parallel:
{: .p.mb-1}

- **Jekyll** handles the local sever with it's `--livereload`{: .code} option and, of course, 
  compiles the static site&nbsp;files.
- **Webpack** handles transforming our Custom ES6 files into cross-browser JS, and compiles, 
  prefixes, and minifies custom SCSS into stylesheets.

We utilize our own custom Webpack plugin (built for Webpack 5) to generate a YAML file. \
_This YAML file contains the **hash of the main bundle**_ (this is the same 
hash&mdash;`'[fullHash]'`{: .code}&mdash;accessed inside a `webpack.config.js`{: .code} file using: 
`filename: '[name].[fullhash].js'`{: .code}.)
{: .p}

_To be clear, when I use the word **"hash"** in this document, 
I'm referring to the hash (i.e. the random looking string of characters) that Webpack 
calculates from the files it consumed (e.g. `c1ffa09121e3327be06c`{: .code}.)_
{: .p}

### The Original `WebpackHashFilePlugin.js`{: .code} Plugin Code:
{: .h3}

```javascript
// Custom Webpack plugin to output the hash into a file.
// Filename/location: `./builtools/WebpackHashFilePlugin.js`
 
// 1.) Require any dependencies here:
const fs = require('fs'); // Built into Nodejs - no installation needed
const path = require('path'); // Built into Nodejs - no installation needed

// 2.) Create the plugins' class constructor and default options:
// Webpack 5 plugins require a class method with a constructor and options for setting defaults
class WebpackHashFilePlugin{ // Class constructor
  constructor (options){
    // 3.) Assign some default options which can be overridden when the plugin is initiated.
    this.options = Object.assign({}, {
      fileName: 'hash',
      path: '../_data.yml'
    }, options)
  }

  // 3.) The Webpack plugins' class needs an `apply(compiler)` method to hook into the `compiler`
  apply(compiler) {
    const options = this.options;
    // 4.) Here we add a 'hook' to 'tap' into the webpack-compiler's `stats` object. Pretty standard Webpack plugin code.
    compiler.hooks.done.tap("WebpackHashFilePlugin", stats => {
      // 5.) Setup some variables for accessing the plugins' options.
      const content = stats.hash; // The string held within this `const` will become the contents of the written file.
      const outputPath = options.path; // String representing the path to create the file (relative to plugin files' location, e.g. '../data/`.)
      const fileName = options.fileName; // String for the filename + extension (e.g. 'hash.yml').
      // 6. Uses Nodejs builtin `path` method to resolve the filename and location.
      const output = path.resolve(__dirname, outputPath, fileName);
      // 7. Use the Nodejs builtin `fs.writeFile()` to create the file containing the bundle's hash.
      fs.writeFile(output, content, (err) => { // `fs.writeFile()` takes 3 params: path containing the filename/extension/location, contents, and an error callback-function
        if (err) {
          console.error(err)
          return
        }
        // Log some info if the file is written successfully
        console.log(`Plugin: {WebpackHashFilePlugin} created: ${output}`);
        console.log(`Hash: ${content}`);
      });
   });
  }
};
// 8.) Export the plugins class
module.exports = WebpackHashFilePlugin;
```

Because the hash is calculated from the bundle's 
files, it is guaranteed to be a new value, when any changes to the source files are made.
**That makes Webpack's hash perfect for cache-busting purposes.**
{: .p}

We use this `hash.yml`{: .code} file for the following purposes:
{: .p.mb-1}

- The YAML file is injected into `_data/hash.yml`{: .code}&mdash;**a Jekyll folder**&mdash;triggering the 
  Jekyll-build to update:
  - This causes Jekyll to copy any changes in the `./assets/*`{: .code} folder and subfolders into the site build.
  - This also causes the local server to update via Jekyll's livereload.
- The hash is also built into any JS script or CSS link elements
  (via Jekyll's Liquid abilities and code similar to this: 
  `<link href="/dist/main.{% raw %}{{ site.data.hash }}{% endraw %}.css">`{: .code}): 
  - This gives us cache-busting capabilities because any styling or JS changes will output a new hash which is built into 
    new filenames.
  - If the above link element used the hash `c1ffa09121e3327be06c`{: .code}it would become: 
    `<link href="/dist/main.c1ffa09121e3327be06c.css">`{: .code}

To use the above original plugin file, you need to require the plugin and add some configuration options from within our `webpack.config.js`{: .code} file:
{: .p}

```javascript
// Filename/location: `./webpack.config.js` file for Webpack v5
// 1.) Require the plugin:
const WebpackHashFilePlugin = require('./buildtools/WebpackHashFilePlugin'); // Our custom plugin found in `/buildtools`

// 2.) Add the plugin to your plugins array:
const plugins = [
  new WebpackHashFilePlugin({ // Initialize our custom plugin
    path: '../_data/',
    fileName: 'hash',    // Remove the '.yml' extension from fileName.
    fileExtension: 'yml' // Add a fileExtension option
  }),
];

const config = {
  plugins, // 3.) Reference the plugins array in the config
  entry: {
    'main': './assets/js/src/main.js',
  },
  // More Webpack configuration code here ...
}

module.exports = config;
```

<br>

<div class="card card-body bg-danger text-white">
  <p><strong>IMPORRANT:</strong> On your first build using the <code class="code">WebpackHashFilePlugin.js</code> plugin, 
  you may get an error saying that the hash file does not exist.</p>
  <p class="mb-0">If this happens, simply create two empty hash files in the same locations that the hash files are built:
    <ul>
      <li><code class="code">_data/hash.yml</code></li>
      <li><code class="code">hash.json</code></li>
    </ul>Then, run another build.
  </p>
</div>

<br>

## Challenges
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

<br>

## The Sollution
{: .h2.mb-4 }

To implement this idea I need to modify my `WebpackHashFilePlugin.js`{: .code} Webpack-plugin-file 
to be able to create both the existing `_data/hash.yml`{: .code} file and create a new 
`hash.json`{: .code} file in a valid JSON format in addition.
{: .p}

For this, I need to do the following modification to the plugins JS file:
{: .p.mb-1}

- Create another plugin option (with default setting) to specify a file-extension separate from the file-name: 
  - This allow us to create either a JSON file and YAML file.
- Modify the output file contents to create a valid JSON file if the extension is `json`{: .code}.

The [original plugin file](#the-original-webpackhashfilepluginjs-plugin-code) is shown above. It's pretty easy to figure out what is going on in the plugin 
if your familiar with JS. Take a look at the file and my inline comments.
{: .p}

### WebpackHashFilePlugin.js modifications
{: .h3 }

The modification needed to add the fileExtension option and JSON syntax support is shown below. Only the new lines 
of code are not commented-out in the `WebpackHashFilePlugin.js`{: .code} file below:
{: .p}

```javascript
// class WebpackHashFilePlugin{
//    constructor (options){
        this.options = Object.assign({}, {
          fileName: 'hash',
          path: '../_data', // Remove the file-extension from path
          fileExtension: 'yml' // Add a `fileExtension` key with a value set to the file's extension (e.g. 'yml')
       }, options)
//   }

//  apply(compiler) {
//    const options = this.options;
//    compiler.hooks.done.tap("WebpackHashFilePlugin", stats => {

      let content; // Define content as an undefined `let` instead of a `const`.

      if (options.fileExtension == 'json') { // If the `fileExtension` option is set to 'json' ...
        content = `{\n  "hash": "${stats.hash}"\n}`; // ... Wrap the hash in an object with a `"hash"` key set to the hash.
      }

      if (options.fileExtension == 'yml') { // If the `fileExtension` option is 'yml' ...
        content = stats.hash; // ... Set the file contents to the hash itself.
      }

//    const outputPath = options.path;
//    const fileName = options.fileName;
      const extension = options.fileExtension;
      const output = path.resolve(__dirname, outputPath, `${fileName}.${extension}`); // Add the fileExtension - `${fileName}.${extension}`
//    fs.writeFile(output, content, (err) => {
//      if (err) {
//        console.error(err)
//        return
//      }
        // File written successfully
//      console.log(`Plugin: {WebpackHashFilePlugin} created ${output}`);
//      console.log(`Hash: ${content}`);
//      });
//   });
//  }
// };

// module.exports = WebpackHashFilePlugin;
```

The entire plugin file should look like this:
{: .p}

```javascript
// File: `./buildtools/WebpackHashFilePlugin.js`
// Save this file in the project's `./buildtools/` directory as `WebpackHashFilePlugin.js`

const fs = require('fs');
const path = require('path');

class WebpackHashFilePlugin {
  constructor (options){
    this.options = Object.assign({}, {
      fileName: 'hash',
      path: '../_data',
      fileExtension: 'yml'
   }, options)
  }

  apply(compiler) {
    const options = this.options;
    
    compiler.hooks.done.tap("WebpackHashFilePlugin", stats => {
      let content;

      if (options.fileExtension == 'json') {
        content = `{\n  "hash": "${stats.hash}"\n}`;
      }
      if (options.fileExtension == 'yml') {
        content = stats.hash;
      }

      const outputPath = options.path;
      const fileName = options.fileName;
      const extension = options.fileExtension;
      const output = path.resolve(__dirname, outputPath, `${fileName}.${extension}`);
      
      fs.writeFile(output, content, (err) => {
        if (err) {
          console.error(err)
          return
        }
        console.log(`Plugin: {WebpackHashFilePlugin} created ${output}`);
        console.log(`Hash: ${content}`);
      });
    });
  }
};

module.exports = WebpackHashFilePlugin;
```

Next, our `webpack.config.js`{: .code} file needs to be updated with the new plugin options:
{: .p}

```javascript
// Filename/location: `./webpack.config.js` file for Webpack v5
// 1.) Require the plugin:
const WebpackHashFilePlugin = require('./buildtools/WebpackHashFilePlugin'); // Our custom plugin found in `/buildtools`

// 2.) Add the plugin to your plugins array:
const plugins = [
  new WebpackHashFilePlugin({ // One instance of the plugin for the YAML file
    path: '../_data/',
    fileName: 'hash',    // Remove the '.yml' extension from fileName.
    fileExtension: 'yml' // Add a fileExtension option
  }),
  new WebpackHashFilePlugin({ // Another instance of the plugin for the JSON file
    path: '../',
    fileName: 'hash',     // Remove the '.yml' extension from fileName.
    fileExtension: 'json' // Add a fileExtension option
  }),
];

const config = {
  plugins, // 3.) Reference the plugins array in the config
  entry: {
    'main': './assets/js/src/main.js',
  },
  // More Webpack configuration code here ...
}

module.exports = config;
```

Now we can create a service worker JS file and a ES6 module to cache network calls.
{: .p}

<br>

## Creating the Service Worker
{: .h2.mb-4}

Now let's dig into the details of creating our service worker, registering and installing them, and caching assets.
{: .p.mb-4}

### `registerServiceWorker.js`{: .code} Module
{: .h3.mb-3}

Create a new JS file named `registerServiceWorker.js`{: .code} and create a default export function with the same name
as the file:
{: .p}

```javascript
function registerServiceWorker () {

}

export default registerServiceWorker;
```

Let's use this module to register our service worker which will be in `./serviceworker.js`{: .code}, 
located in the projects root. **The service worker has to go into the project root so that its' scope 
includes all the files hosted from the site's origin.**
{: .p}

To do that we need to use the \
`navigator.serviceWorker.register('./<SERVICE_WORKER_FILE>.js', { scope: './' })`{: .code} method.
Be sure to ues any `serviceWorker`{: .code} methods inside a check for service worker compatibility.
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
  // 7.) Use the `ExtendableEvent.waitUntil({ //... })` method to "hijack" the network requests
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