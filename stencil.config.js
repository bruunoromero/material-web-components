const path = require("path");
const sass = require("@stencil/sass");

exports.config = {
  namespace: "MWC",
  plugins: [
    sass({
      includePaths: ["node_modules", "node_modules/@material/*"].map(d =>
        path.join(__dirname, d)
      )
    })
  ],
  outputTargets: [
    {
      type: "dist"
    },
    {
      type: "www",
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: "www",
  watchGlob: "**/**"
};
