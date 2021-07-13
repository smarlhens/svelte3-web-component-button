# Svelte 3 Web Component Button with TailwindCSS & Storybook

[![GitHub CI](https://github.com/smarlhens/svelte3-web-component-button/workflows/CI/badge.svg)](https://github.com/smarlhens/svelte3-web-component-button/actions?query=workflow%3ACI)
[![CircleCI](https://circleci.com/gh/smarlhens/svelte3-web-component-button.svg?style=svg)](https://circleci.com/gh/smarlhens/svelte3-web-component-button)
[![Build Status](https://travis-ci.com/smarlhens/svelte3-web-component-button.svg?branch=master)](https://travis-ci.com/smarlhens/svelte3-web-component-button)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![GitHub issues](https://img.shields.io/github/issues/smarlhens/svelte3-web-component-button)](https://github.com/smarlhens/svelte3-web-component-button/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/smarlhens/svelte3-web-component-button)](https://github.com/smarlhens/svelte3-web-component-button/pulls)
[![GitHub stars](https://img.shields.io/github/stars/smarlhens/svelte3-web-component-button)](https://github.com/smarlhens/svelte3-web-component-button/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/smarlhens/svelte3-web-component-button)](https://github.com/smarlhens/svelte3-web-component-button/network)
[![GitHub contributors](https://img.shields.io/github/contributors/smarlhens/svelte3-web-component-button)](https://github.com/smarlhens/svelte3-web-component-button/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/smarlhens/svelte3-web-component-button)](https://github.com/smarlhens/svelte3-web-component-button)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/smarlhens/svelte3-web-component-button)
![GitHub repo size](https://img.shields.io/github/repo-size/smarlhens/svelte3-web-component-button)


*Looking for a shareable component template? Go here --> [sveltejs/component-template](https://github.com/sveltejs/component-template)*

---

# svelte app

This is a project template for [Svelte](https://svelte.dev) apps. It lives at https://github.com/sveltejs/template.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npx degit sveltejs/template svelte-app
cd svelte-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
