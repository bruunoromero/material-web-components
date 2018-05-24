import { Component } from "@stencil/core";

@Component({
  tag: "mwc-card-primary-action"
})
export class CardPrimaryAction {
  hostData() {
    return {
      class: {
        "mdc-card__primary-action": true
      }
    };
  }

  render() {
    return <slot />;
  }
}
