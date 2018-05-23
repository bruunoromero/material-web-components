import { MDCRipple } from "@material/ripple";
import { Component, Prop, Element } from "@stencil/core";

import { doIfExists } from "../../utils/context";
import { keysToString } from "../../utils/strings";

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
  }

  componentDidUnload() {
    this.instance.destroy();
  }

  getClasses() {
    const isOnCardAcions = this.el.parentElement.classList.contains(
      "mdc-card__action-buttons"
    );

    const classes = {
      "mdc-button": true,
      "mdc-button--dense": this.dense,
      "mdc-button--raised": this.raised,
      "mdc-card__action": isOnCardAcions,
      "mdc-button--outlined": this.outlined,
      "mdc-button--unelevated": this.unelevated,
      "mdc-card__action--button": isOnCardAcions
    };

    return keysToString(classes);
  }

  render() {
    return (
      <this.tag
        href={this.href}
        disabled={this.disabled}
        class={this.getClasses()}
      >
        <slot />
      </this.tag>
    );
  }
}
