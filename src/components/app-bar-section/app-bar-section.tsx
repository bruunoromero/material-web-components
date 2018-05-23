import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mwc-app-bar-section"
})
export class AppBarSection {
  @Prop() alignEnd: boolean;
  @Prop() alignStart: boolean;

  hostData() {
    return {
      class: {
        "mdc-top-app-bar__section": true,
        "mdc-top-app-bar__section--align-end": this.alignEnd,
        "mdc-top-app-bar__section--align-start": this.alignStart
      }
    };
  }

  render() {
    return <slot />;
  }
}
