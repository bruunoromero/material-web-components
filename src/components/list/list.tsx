import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mwc-list",
  styleUrl: "list.scss"
})
export class List {
  @Prop() dense: boolean;

  hostData() {
    return {
      class: {
        "mdc-list": true,
        "mdc-list--dense": this.dense
      }
    };
  }

  render() {
    return <slot />;
  }
}
