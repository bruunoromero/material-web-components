import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mwc-card-actions"
})
export class CardActions {
  @Prop() fullBleed: boolean;

  hostData() {
    return {
      class: {
        "mdc-card__actions": true,
        "mdc-card__full-bleed": this.fullBleed
      }
    };
  }

  render() {
    return <slot />;
  }
}
