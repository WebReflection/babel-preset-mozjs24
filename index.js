module.exports = {
  plugins: [
    "babel-plugin-transform-es2015-template-literals",
    "babel-plugin-transform-es2015-literals",
    "babel-plugin-transform-es2015-function-name",
    "babel-plugin-transform-es2015-block-scoped-functions",
    "babel-plugin-transform-es2015-classes",
    "babel-plugin-transform-es2015-object-super",
    "babel-plugin-transform-es2015-shorthand-properties",
    "babel-plugin-transform-es2015-computed-properties",
    "babel-plugin-transform-es2015-duplicate-keys",
    "babel-plugin-transform-es2015-sticky-regex",
    "babel-plugin-transform-es2015-unicode-regex",
    "babel-plugin-transform-es2015-parameters"
  ].map(
    p => require(p)
  ).concat([
    [
      require("babel-plugin-transform-regenerator"),
      { async: false, asyncGenerators: false }
    ]
  ])
};