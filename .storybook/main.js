const WindiCSS = require('windicss-webpack-plugin').default;

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  svelteOptions: {
    preprocess: require('svelte-preprocess')(),
  },
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSS());
    return config;
  },
};
