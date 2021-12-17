---
accordion_page: Home
order: 3
title: Project Features
---


## Project Features
{: .h2.mb-5 }

To follow along with this documentation it will help to know about some of its features. 
The features discussed in this section are as follows:
{: .p}

- [ES6 Modules](#es6-modules):
  - [Exports](#exports)
  - [Imports and dynamic imports](#imports)
- [Cache Busting with Webpack + Jekyll](#cache-busting-with-webpack--jekyll)

It is especially important to understand my custom Webpack 5 plugin `WebpackHashFilePlugin.js`{:.code} as
this documentation addresses some the real-world challenges when trying to implement service workers.
{: .p}

### ES6 Modules
{: .h3.mb-3 }

#### Exports
{: .h4.mb-3 }

This project setup uses Webpack 5 to transpile and polyfill any custom ES6—the same setup I use at work. We use a specific  ES6 module-pattern to keep code organized, reusable, and easy to maintain. It uses ES6 modules:
{: .p.mb-1}
- A module should only export one function, (its `export default <myModulesMainFunction>;`{: .code}.)
- All other functions are to be internal—they are defined and referenced only from within the module's scope.
- A module should contain code related to a single task, functionality, or solution. No unrelated code.


```javascript
// If this module depends on other JS modules, add any static imports here:
import someFunction from './someModule.js';

// Define variables available to this module's scope at the top:
const SOME_IMPORTANT_CONSTANT = 'messing with me may break things.';

function someInternalTask(param) {
  // Code related to this small task
  someFunction(param);
}

function myDefaultExportFunction() {
  // More function calls and code for this module ...
  someInternalTask(SOME_IMPORTANT_CONSTANT);
  // ...
}

export default myDefaultExportFunction;
```
If you have a very small/simple module you could also define the default export
inline with the functions declaration like this:
{:.p}

```javascript
export default function myDefaultExportFunction() {
  // More JS ...
}
```

#### Imports
{: .h4.mb-3 }

The project is also capable of dynamic imports and lazy-loading of modules. \
Static imports (`import moduleName from './moduleName';`{:.code}) must be at the top of any JS file.
**The ES6 `import()`{:.code} method, however, can be used anywhere**—even inside 
an `if`{:.code}-statement:
{:.p}

```javascript
const MY_CONST = 'some important string.';
const myRandomTest = (MY_CONST.search(/important\sstring\./g) != -1);
let param = undefined;

if ( myRandomTest ) {
  import('./myModule').then((module) => {
    const defaultFunction = module.default; // Define the modules default func

    defaultFunction(param);
  });
}
```

The modules' default function needs to be defined after the import. The shortest way to do this is
inline with the `then()`{: .code} callback:
{:.p}

```javascript
window.addEventListener('load', () => {
  import('./myModule').then(({default: defaultFn}) => { // Much more concise
    // More code ...
    defaultFn();
  });
});
```

<br>

<div class="card bg-info">
  <div class="card-header px-4">
    <h5 class="h5">Important Information</h5>
  </div>
  <div class="card-body px-4">
    <p class="p--darker">
      <strong>NOTE:</strong> You cannot mix different module syntaxes (i.e. 
      <code class="code">CommonJS</code> + <code class="code">ES6</code> modules.)
    </p>
    <p class="p--darker">
      If you want to use <code class="code">CommonJS</code>, or some other module sytax, you
      will need to change all the export/import statements for the bundle entrypoint file 
      and it's module dependencies.
    </p>
    <p class="p--darker">Do not deviate from the ES6 module syntax, or try
    to export multiple functions from a single module, or Webpack may throw an error and exit the build command.</p>
  </div>
</div>


<br>

### Cache Busting with Webpack + Jekyll
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

<div class="card bg-danger text-white mx-md-5">
  <div class="card-header px-4">
    <h5 class="h5">Important</h5>
  </div>
  <div class="card-body px-4">
    <p class="p text-white"><strong>IMPORTANT:</strong> On your first build using the <code class="code">WebpackHashFilePlugin.js</code> plugin, 
    you may get an error saying that the hash file does not exist.</p>
    <p class="p text-white mb-0">If this happens, simply create two empty hash files in the same locations that the hash files are built:
      <ul class="text-white">
        <li><code class="code">_data/hash.yml</code></li>
        <li><code class="code">hash.json</code></li>
      </ul>
    </p>
    <p class="p text-white">Then, run another build.</p>
  </div>
</div>
