module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: ['**/*.js', '**/*.ts'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
    extraFileExtensions: ['.svelte'],
  },
  plugins: ['svelte3', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'prettier/prettier': 'error',
    'svelte3/lint-template': 2,
  },
  settings: {
    'svelte3/typescript': true,
  },
};
