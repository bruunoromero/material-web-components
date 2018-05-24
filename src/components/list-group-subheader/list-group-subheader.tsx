import { Component } from "@stencil/core";

@Component({
  tag: "mwc-list-group-subheader"
})
export class ListGroup {
  render() {
    return (
      <h3 class="mdc-list-group__subheader">
        <slot />
      </h3>
    );
  }
}
