import { Component, Prop, Element } from "@stencil/core";
import { keysToString } from "../../utils/strings";

@Component({
  tag: "mwc-icon"
})
export class Icon {
  @Prop() href: string;
  @Prop() name: string;

  @Element() el: HTMLElement;

  hostData() {
    const classList = this.el.parentElement.classList;
    return {
      class: {
        "mdc-fab__icon": classList.contains("mdc-fab")
      }
    };
  }

  getClasses(): string {
    const classList = this.el.parentElement.classList;
    const classes = {
      "material-icons": true,
      "mdc-text-field__icon": classList.contains("mdc-text-field"),
      "mdc-top-app-bar__action-item": classList.contains(
        "mdc-top-app-bar__section"
      )
    };

    return keysToString(classes);
  }

  render() {
    const Tag: string = this.href ? "a" : "i";

    return (
      <Tag href={this.href} class={this.getClasses()}>
        {this.name}
      </Tag>
    );
  }
}
