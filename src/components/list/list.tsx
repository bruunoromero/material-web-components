import { Component } from "@stencil/core";

@Component({
  tag: "mwc-list",
  styleUrl: "list.scss"
})
export class List {
  hostData() {
    return {
      class: {
        "mdc-list": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
