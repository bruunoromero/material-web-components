import { MDCRipple } from "@material/ripple";
import { Component, Prop, Element } from "@stencil/core";

import { doIfExists } from "../../utils/context";

@Component({
  tag: "mwc-button",
  styleUrl: "button.scss"
})
export class Button {
  @Element() el: HTMLElement;

  @Prop() href: string;
  @Prop() tag = "button";
  @Prop() dense: boolean;
  @Prop() ripple: boolean;
  @Prop() raised: boolean;
  @Prop() disabled: boolean;
  @Prop() outlined: boolean;
  @Prop() unelevated: boolean;

  instance: MDCRipple;

  componentDidLoad() {
    doIfExists(this, ["ripple"], () => {
      const element = this.el.querySelector(this.tag);
      this.instance = new MDCRipple(element);
    });

    if (this.el.parentElement.classList.contains("mdc-card__action-buttons")) {
      this.el
        .querySelector(this.tag)
        .classList.add("mdc-card__action", "mdc-card__action--button");
    }
  }

  componentDidUnload() {
    this.instance.destroy();
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
