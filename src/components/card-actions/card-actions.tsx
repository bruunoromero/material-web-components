import { Component } from "@stencil/core";

@Component({
  tag: "mwc-card-actions",
})
export class Card {
  hostData() {
    return {
      class: {
        "mdc-card__actions": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
