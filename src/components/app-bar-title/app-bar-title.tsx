import { Component } from "@stencil/core";

@Component({
  tag: "mwc-app-bar-title"
})
export class AppBarTitle {
  hostData() {
    return {
      class: {
        "mdc-top-app-bar__title": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
