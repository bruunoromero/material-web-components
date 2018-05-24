import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mwc-card-media"
})
export class CardMedia {
  @Prop() square: boolean;
  @Prop() sexteenByNine: boolean;

  hostData() {
    return {
      class: {
        "mdc-card__media": true,
        "mdc-card__media--square": this.square,
        "mdc-card__media--16-9": this.sexteenByNine
      }
    };
  }

  render() {
    return <slot />;
  }
}
