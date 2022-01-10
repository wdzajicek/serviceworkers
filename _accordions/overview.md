---
accordion_page: Home
order: 1
title: Overview
---

## Overview
{: .h2.mb-4 id="project-overview"}

This project was developed for the purpose of implementing 
**service workers**, and other PWA functionality, into a specific 
**JAMStack architecture** that I use in web development at work.
{: .p}

Most JS documentation on service workers (or any other feature for that matter,) 
only shows minimal examples of each feature or method—in a very piecemeal way—leaving 
you to put it all together. instead, I wanted to provide a real-world example of 
implementing service workers, and the challenges I faced.
{:.p}

The JAMStack architecture is a setup using `Jekyll`{: .code}, `Nodejs`{: .code}, 
`Webpack`{: .code} + `sass-loader`{: .code} + `Corejs`{: .code} + `Babel`{: .code} +
`ES6`{: .code} ,  `SASS`{: .code}, `autoprefixer`{: .code} etc.. This architecture 
allows us to write and maintain a modular SASS setup for styling and ES6 which is 
polyfilled and transpiled into JS with greater browser support. 
{: .p}

The project is setup to use the babel presets defined in `package.json`{: .code} &mdash; specifically, 
Corejs v3 with ES proposals. Browser support is defined in the `"browserslist"`{: .code}. 
Because I need to support IE10+ at work, I let `"useBuiltIns": "usage",`{: .code} handle the polyfilling
as opposed to importing individual polyfills where I use them.
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

The two most important APIs used include **Google Sheets** and **Google Docs**. 
I often use the Google Sheets API when I have content/information that updates 
frequently. Instead of running an entire site-build to generate new HTML, the 
Sheets API allows me to _"fetch"_ new data (held in the spreadsheet) on-the-fly 
as the user loads the page.
{: .p}
