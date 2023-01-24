module.exports = {
  extends: ["plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  plugins: ["react", "react-hooks", "jsx-a11y"],
  rules: {
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    // https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: ["label"],
        labelAttributes: ["label"],
        controlComponents: ["StyledHiddenInput"],
        depth: 1,
      },
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
  },
};
