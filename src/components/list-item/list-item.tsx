import { MDCRipple } from "@material/ripple";
import { Component, Element, Prop } from "@stencil/core";
import { keysToString } from "../../utils/strings";

@Component({
  tag: "mwc-list-item",
  styleUrl: "list-item.scss"
})
export class ListItem {
  @Element() el: HTMLElement;

  @Prop({ mutable: true })
  tag = "div";
  @Prop() href: string;
  @Prop() ripple = true;
  @Prop() selected: boolean;
  @Prop() activated: boolean;
  @Prop() multiline: boolean;
  @Prop() leadingIcon: string;
  @Prop() trailingIcon: string;

  instance: MDCRipple;

  componentDidLoad() {
    if (this.ripple) {
      this.instance = new MDCRipple(this.el.querySelector(".mdc-list-item"));
    }
  }

  componentDidUnload() {
    if (this.instance.destroy) {
      this.instance.destroy();
    }
  }

  getClasses(): string {
    const classes = {
      "mdc-list-item": true,
      "mdc-list-item--selected": this.selected,
      "mdc-list-item--activated": this.activated
    };

    return keysToString(classes);
  }

  render() {
    this.tag = this.href ? "a" : this.tag;

    const inner = this.multiline ? (
      <div>
        <slot />
      </div>
    ) : (
      <slot />
    );

    return (
      <this.tag href={this.href} class={this.getClasses()}>
        {this.leadingIcon && (
          <mwc-icon class="mwc-leading-icon" name={this.leadingIcon} />
        )}
        {inner}
        {this.trailingIcon && (
          <mwc-icon class="mwc-trailing-icon" name={this.trailingIcon} />
        )}
      </this.tag>
    );
  }
}
