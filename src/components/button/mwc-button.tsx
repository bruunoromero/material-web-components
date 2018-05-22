import { MDCRipple } from "@material/ripple";
import { Component, Prop, Element } from "@stencil/core";

@Component({
  tag: "mwc-button",
  styleUrl: "mwc-button.scss"
})
export class MyComponent {
  @Prop() tag = "button";
  @Prop() ripple: boolean;
  @Element() el: HTMLElement;

  componentDidLoad() {
    if (this.ripple) {
      const element = this.el.querySelector(this.tag);
      new MDCRipple(element);
    }
  }

  render() {
    return (
      <this.tag class="mdc-button">
        <slot />
      </this.tag>
    );
  }
}
