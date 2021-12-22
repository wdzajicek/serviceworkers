---
accordion_page: Home
order: 2
title: Project Dependencies
---

## Project Dependencies
{: .h2 }

### Nodejs + Ruby
{: .typography__h3 }

To run this project locally you will need a linux-like environment (I use a mac with Big Sur) with Nodejs v14 and Ruby-2.6.3. I use [Ruby Version Manager](https://rvm.io/) RVM and [Node Version Manager](https://github.com/nvm-sh/nvm) NVM to install and manage Ruby and Nodejs versions.

The project has an `.nvmrc`{: .code} file. If you want to use it, and have `cowsay`{: .code} installed (via Homebrew) add the following to your `.functions`{: .code} dotfile:

```bash
## Use a local .nvmrc file if present # from https://stackoverflow.com/a/48322289
enter_directory() {
  if [[ $PWD == $PREV_PWD ]]; then
    return
  fi

  PREV_PWD=$PWD
  [[ -f ".nvmrc" ]] && nvm use > /dev/null 2>&1 && nvm use | cowsay $n
}

export PROMPT_COMMAND=enter_directory
```

#### Jekyll
{: .typography__h4 }

In addition to `ruby-2.3.6`{: .code} you will need to install Jekyll. See <https://jekyllrb.com/docs/installation/> for the latest method of installation.

### Install Project Dependencies
{: .typography__h3 }

To run the local build commands, you will need to install the projects npm and gem dependencies. Run the following commands
to install them:

```bash
npm i && bundle i
```

The `package.json`{: .code} file will download the `Webpack`{: .code}, `Babel`{: .code}, `Corejs`{: .code}, 
`Bootstrap`{: .code} & `Popperjs`{: .code}, `colors`{: .code} (for colorful console output,) and 
`npm-run-all`{: .code} Nodejs dependencies. The `Gemfile`{: .code} installs `jekyll v4`{: .code} and 
`rouge v3.26`{: .code} (for syntax highlighting.)

### Running the builds
{: .typography__h3 }

The project has a development build and production build. Both use the `jekyll serve --livereload` command for jekyll, and the  `npx webpack` command for Webpack. These two command run in parallel by running either the `production` or `development`
script. Use `npm run production` and `npm run development` to start the commands in parallel.

When you are finished with previewing the build (navigate to `http://localhost:3000`{: .code} in you browser to preview,)
use `control` + `c` (on the keyboard,) to stop the running commands. Both production and development builds watch for file changes and therefore the processes need to be stopped.

After changes are created in a development build, they should be tested and previewed in the production build. Use `npm run production` and navigate to `http://localhost:3000`{: .code} in your browser. Only an `npm run production` build should be
used to commit changes to GitHub—**DON'T PUSH A DEVELOPMENT BUILD**.