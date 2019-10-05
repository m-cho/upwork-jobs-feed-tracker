module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    chrome: false
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": ["error", { "ignorePureComponents": false }],
    "react/jsx-max-props-per-line": ["error", { "maximum": 1, "when": "always" }],
    "func-style": ["error", "expression"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "operator-linebreak": 0,
    "import/prefer-default-export": false,
    "implicit-arrow-linebreak": 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": 0,
    "react/forbid-prop-types": 0,
  },
};
