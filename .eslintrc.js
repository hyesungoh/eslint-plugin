module.exports = {
  extends: ["prettier"],
  plugins: ["prettier"],
  env: { es6: true },
  ignorePatterns: ["dist"],
  rules: {
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
  },
};
