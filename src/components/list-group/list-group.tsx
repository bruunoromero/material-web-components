import { Component } from "@stencil/core";

@Component({
  tag: "mwc-list-group"
})
export class ListGroup {
  hostData() {
    return {
      class: {
        "mdc-list-group": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
