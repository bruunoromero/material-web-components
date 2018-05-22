import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mwc-card",
  styleUrl: "card.scss"
})
export class Card {
  @Prop() outlined: boolean;

  hostData() {
    return {
      class: {
        "mdc-card": true,
        "mdc-card--outlined": this.outlined
      }
    };
  }

  render() {
    return <slot />;
  }
}
