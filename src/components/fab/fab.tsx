import { MDCRipple } from "@material/ripple";
import { Component, Prop, Element } from "@stencil/core";

import { doIfExists } from "../../utils/context";

@Component({
  tag: "mwc-fab",
  styleUrl: "fab.scss"
})
export class Fab {
  @Element() el: HTMLElement;

  @Prop() href: string;
  @Prop() tag = "button";
  @Prop() mini: boolean;
  @Prop() ripple: boolean;
  @Prop() exited: boolean;
  @Prop() disabled: boolean;

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
    const classes = [];

    doIfExists(this, ["mini", "exited"], (_, key) => {
      classes.push(`mdc-fab--${key}`);
    });

    return classes.join(" ");
  }

  render() {
    return (
      <this.tag
        href={this.href}
        disabled={this.disabled}
        class={`mdc-fab ${this.getClasses()}`}
      >
        <slot />
      </this.tag>
    );
  }
}
