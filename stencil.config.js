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
  bundles: [
    {
      components: [
        "mwc-app-bar",
        "mwc-app-bar-row",
        "mwc-app-bar-title",
        "mwc-app-bar-section"
      ]
    },
    {
      components: ["mwc-card", "mwc-card-actions", "mwc-card-buttons"]
    },
    {
      components: [
        "mwc-list",
        "mwc-list-item",
        "mwc-list-group",
        "mwc-list-divider",
        "mwc-list-item-text",
        "mwc-list-group-subheader"
      ]
    }
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
