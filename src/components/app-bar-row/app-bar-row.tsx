import { Component } from "@stencil/core";

@Component({
  tag: "mwc-app-bar-row"
})
export class AppBarRow {
  hostData() {
    return {
      class: {
        "mdc-top-app-bar__row": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
