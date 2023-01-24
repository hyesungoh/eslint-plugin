# @hyesungoh/eslint-plugin

[![Publish package](https://github.com/hyesungoh/eslint-plugin/actions/workflows/publish.yml/badge.svg)](https://github.com/hyesungoh/eslint-plugin/actions/workflows/publish.yml)

Eslint configuration with below packages

```bash
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
eslint-config-prettier
eslint-plugin-import
eslint-plugin-jsx-a11y
eslint-plugin-prettier
eslint-plugin-react
eslint-plugin-react-hooks
eslint-plugin-simple-import-sort
eslint-plugin-unused-imports
```

## How to use it

1. Make sure `eslint` and `prettier` is installed

```
yarn add prettier eslint -D
# or
npm install prettier eslint --dev
```

2. install `@hyesungoh/eslint-plugin`

3. set eslint configuration file

```js
// .eslintrc.js
module.exports = {
  plugins: ["@hyesungoh"],
  extends: [
    "plugin:@hyesungoh/base",
    "plugin:@hyesungoh/react",
    "plugin:@hyesungoh/typescript",
  ],
};
```

## Inspired

inspired below project

- [junghyeonsu/configs](https://github.com/junghyeonsu/configs)
