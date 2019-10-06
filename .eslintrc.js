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
    "react/jsx-props-no-spreading": 0,
    "func-style": ["error", "expression"],
    "quotes": ["error", "single", { "allowTemplateLiterals": true }],
    "comma-dangle": ["error", { "functions": "never" }],
    "function-paren-newline": 0,
    "operator-linebreak": 0,
    "import/prefer-default-export": 0,
    "implicit-arrow-linebreak": 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": ["error", {
      "ObjectExpression": { "multiline": true, "minProperties": 3 },
      "ObjectPattern": { "multiline": true },
      "ImportDeclaration": { "multiline": true, "minProperties": 3 },
      "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    "react/forbid-prop-types": 0,
    "no-confusing-arrow": 0,
    "arrow-parens": ["error", "as-needed"],
  },
};
