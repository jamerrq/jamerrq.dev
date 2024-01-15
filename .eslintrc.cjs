module.exports = {
  plugins: ['@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:astro/recommended',
    'preact'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}', '*.astro'],
      parserOptions: {
        sourceType: 'script',
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      parser: 'astro-eslint-parser'
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-irregular-whitespace': 'off',
    '@typescript-eslint/triple-slash-reference': 'off'
  }
}
