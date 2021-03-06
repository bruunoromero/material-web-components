import { Component } from "@stencil/core";

@Component({
  tag: "mwc-card-buttons"
})
export class CardButtons {
  hostData() {
    return {
      class: {
        "mdc-card__action-buttons": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
