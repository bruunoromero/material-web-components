import { Component } from "@stencil/core";

@Component({
  tag: "mwc-card-media-content"
})
export class CardMediaContent {
  hostData() {
    return {
      class: {
        "mdc-card__media-content": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
