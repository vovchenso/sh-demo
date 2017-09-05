module.exports = {
  extends: 'airbnb',
  rules: {
    'comma-dangle': 0,
    'arrow-body-style': 0,
    'jsx-a11y/href-no-hash': 0,
    'react/jsx-filename-extension': 0,
    'arrow-parens': 0,
    'react/require-default-props': 0
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false
  },
  env: {
    browser: true,
    node: true
  }
};
