---
accordion_page: Home
order: 5
title: The Solution
---

## The Solution
{: .h2.mb-4 id="solution" }

To implement this idea I need to modify my `WebpackHashFilePlugin.js`{: .code} Webpack-plugin-file 
to be able to create both the existing `./_data/hash.yml`{: .code} file and a new 
`./hash.json`{: .code} file in valid JSON format.
{: .p}

The `hash.json`{: .code} file, along with the Fetch API, will allow us access the bundle's hash from 
within the service worker's scope. We can then use this hash to reconstruct the filenames for caching 
in our&nbsp;app.
{: .p}

For this, I need to do the following modification to the plugins JS file:
{: .p.mb-1}

- Create another plugin option (with a default setting) to specify a file-extension separate from the file-name: 
  - This will allow us to create either a JSON or YAML file.
- Modify the output file contents to create a valid JSON file (if the extension is `json`{: .code}).

The [original plugin file](?id=cache-busting-with-webpack--jekyll#project-features) is shown above. It's pretty easy to figure out what is going on in the plugin 
if your familiar with JS. Take a look at the file and my inline comments.
{: .p}

### WebpackHashFilePlugin.js modifications
{: .h3 }

The modification needed to add the fileExtension option and JSON syntax support are shown below. Lines of code 
that stay the same are commented-out via JS inline comments (`// Inline comment`{: .code}):
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

Next, our `webpack.config.js`{: .code} file needs to be updated with the new plugin options. 
We also need to create a second instance of the plugin in order to generate another hash file (i.e. `hash.json`{: .code}):
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

Now we can create a service worker JS file, and an ES6 module, to cache network calls.
{: .p}
