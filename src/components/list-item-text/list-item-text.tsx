import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mwc-list-item-text"
})
export class ListItemText {
  @Prop() primary = true;
  @Prop() secondary: boolean;

  hostData() {
    return {
      class: {
        "mdc-list-item__secondary-text": this.secondary,
        "mdc-list-item__text": !this.secondary && this.primary
      }
    };
  }

  render() {
    return <slot />;
  }
}
