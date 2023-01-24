const commonjs = require("@rollup/plugin-commonjs");
const terser = require("@rollup/plugin-terser");

module.exports = {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
    },
    {
      file: "dist/index.mjs",
      format: "es",
    },
  ],
  plugins: [commonjs(), terser()],
};
