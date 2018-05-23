import { MDCRipple } from "@material/ripple";
import { Component, Element, Prop } from "@stencil/core";

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

  render() {
    this.tag = this.href ? "a" : this.tag;

    return (
      <this.tag href={this.href} class="mdc-list-item">
        {this.leadingIcon && (
          <mwc-icon class="mwc-leading-icon" name={this.leadingIcon} />
        )}
        <slot />
        {this.trailingIcon && (
          <mwc-icon class="mwc-trailing-icon" name={this.trailingIcon} />
        )}
      </this.tag>
    );
  }
}
