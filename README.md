
# Service Workers

> ...testing environment for implementing service workers and other PWA technologies into a JAMStack website...

-----

## Overview

This project uses Jekyll + Nodejs + Webpack + Corejs + Bootstrap to compile static site files and bundle/compile JS/SCSS. **This project is a testing environment for implementing service workers and other PWA technologies into a JAMStack website with modern ES6/SCSS capabilities.**

## gh-pages

Go to <https://wdzajicek.github.io/serviceworkers/> to see the live app. Notice, that on subsequent reloads it loads almost instantly from the cache.

## Installation

```bash
git clone git@github.com:wdzajicek/serviceworkers.git
cd serviceworkers
npm i && bundle i
```

## Usage

### Building the site

```bash
# Production build
npm run production

# Development build
npm run development
```