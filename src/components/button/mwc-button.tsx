import { MDCRipple } from "@material/ripple";
import { Component, Prop, Element } from "@stencil/core";

import { doIfExists } from "../../utils/context";

@Component({
  tag: "mwc-button",
  styleUrl: "mwc-button.scss"
})
export class Button {
  @Prop() href: string;
  @Prop() tag = "button";
  @Prop() dense: boolean;
  @Prop() ripple: boolean;
  @Prop() raised: boolean;
  @Prop() disabled: boolean;
  @Prop() outlined: boolean;
  @Prop() unelevated: boolean;
  @Element() el: HTMLElement;

  componentDidLoad() {
    doIfExists(this, ["ripple"], () => {
      const element = this.el.querySelector(this.tag);
      new MDCRipple(element);
    });

    if (this.el.parentElement.classList.contains("mdc-card__action-buttons")) {
      this.el
        .querySelector(this.tag)
        .classList.add("mdc-card__action", "mdc-card__action--button");
    }
  }

  getClasses() {
    const classes = [];

    doIfExists(
      this,
      ["dense", "raised", "outlined", "unelevated"],
      (_, key) => {
        classes.push(`mdc-button--${key}`);
      }
    );

    return classes.join(" ");
  }

  render() {
    return (
      <this.tag
        href={this.href}
        disabled={this.disabled}
        class={`mdc-button ${this.getClasses()}`}
      >
        <slot />
      </this.tag>
    );
  }
}