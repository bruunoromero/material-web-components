import { MDCTopAppBar } from "@material/top-app-bar";
import { Component, Element, Prop } from "@stencil/core";

@Component({
  tag: "mwc-app-bar",
  styleUrl: "app-bar.scss"
})
export class AppBar {
  @Element() el: HTMLElement;

  @Prop() fixed: boolean;
  @Prop() short: boolean;
  @Prop() prominent: boolean;
  @Prop() shortCollapsed: boolean;

  instance: MDCTopAppBar;

  componentDidLoad() {
    const header = this.el.querySelector("header");
    this.instance = new MDCTopAppBar(header);
  }

  componentDidUnload() {
    this.instance.destroy();
  }

  getClasses(): string {
    const classes = {
      "mdc-top-app-bar": true,
      "mdc-top-app-bar--fixed": this.fixed,
      "mdc-top-app-bar--short": this.short,
      "mdc-top-app-bar--proiminent": this.prominent,
      "mdc-top-app-bar--short-collapsed": this.shortCollapsed
    };

    return Object.keys(classes)
      .filter(key => classes[key])
      .join(" ");
  }

  render() {
    return (
      <header class={this.getClasses()}>
        <slot />
      </header>
    );
  }
}
