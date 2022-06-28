# Svelte 3 Web Component Button with WindiCSS & Storybook

[![GitHub CI](https://github.com/smarlhens/svelte3-web-component-button/workflows/CI/badge.svg)](https://github.com/smarlhens/svelte3-web-component-button/actions?query=workflow%3ACI)
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

**This repository shows you how to create a reusable web component using [Svelte](https://svelte.dev/). Exposed with documentation using [Storybook](https://storybook.js.org/).**

---

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)

---

## Prerequisites

- [Node.JS](https://nodejs.org/en/download/) **version ^14.17.0 || >=16.0.0**

---

## Installation

1. Clone the git repository

   ```bash
   git clone https://github.com/smarlhens/svelte3-web-component-button.git
   ```

1. Go into the project directory

   ```bash
   cd svelte3-web-component-button/
   ```

1. Install NPM dependencies

   ```bash
   npm i
   ```

---

## Folder organization

- [`src/components`](./src/components): contain web components written with [Svelte](https://svelte.dev/)
- [`src/stories`](./src/stories): contain stories for [Storybook](https://storybook.js.org/)

---

## Usage

[CustomButton.svelte](./src/components/custom-button/CustomButton.svelte):

```html
<custom-button label="Button" disabled="false"></custom-button>
```

---
