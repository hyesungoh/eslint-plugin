module.exports = {
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  plugins: ["simple-import-sort", "unused-imports", "prettier"],
  rules: {
    // https://eslint.org/docs/latest/rules/no-console
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    // https://eslint.org/docs/latest/rules/no-restricted-exports
    "no-restricted-exports": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false,
        semi: true,
        tabWidth: 2,
        useTabs: false,
        trailingComma: "all",
        printWidth: 100,
        arrowParens: "always",
      },
      {
        usePrettierrc: false,
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
