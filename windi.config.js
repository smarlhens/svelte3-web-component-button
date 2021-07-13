import { defineConfig } from 'windicss/helpers';
const typography = require('windicss/plugin/typography');
const forms = require('windicss/plugin/forms');

export default defineConfig({
  preflight: true,
  attributify: true,
  extract: {
    include: ['./public/index.html', './src/components/**/*.svelte'],
    exclude: ['node_modules', '.git', 'public'],
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [typography, forms],
});
