const WindiCSSWebpackPlugin = require('windicss-webpack-plugin');

module.exports = {
  features: {
    postcss: false,
  },
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  svelteOptions: {
    preprocess: require('svelte-preprocess')(),
  },
  webpackFinal: config => {
    config.plugins.push(new WindiCSSWebpackPlugin());
    return config;
  },
};
