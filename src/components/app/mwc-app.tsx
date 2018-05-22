import { Component, Prop, Element } from "@stencil/core";

import { doIfExists } from "../../utils/context";
import { camelCaseToDash } from "../../utils/strings";

@Component({
  tag: "mwc-app",
  styleUrl: "mwc-app.scss"
})
export class App {
  @Prop() surface: string;
  @Prop() primary: string;
  @Prop() secondary: string;
  @Prop() onSurface: string;
  @Prop() onPrimary: string;
  @Prop() background: string;
  @Prop() onSecondary: string;

  @Element() el: HTMLElement;

  componentWillLoad() {
    this.setCssVariables();
  }

  hostData() {
    return {
      class: "mdc-typography"
    };
  }

  setCssVariables() {
    const doc = document.documentElement;

    doIfExists(
      this,
      [
        "surface",
        "primary",
        "secondary",
        "background",
        "onSurface",
        "onPrimary",
        "onSecondary"
      ],
      (value, key) => {
        const k = camelCaseToDash(key);
        doc.style.setProperty(`--mdc-theme-${k}`, value);
      }
    );
  }

  render() {
    return <slot />;
  }
}
