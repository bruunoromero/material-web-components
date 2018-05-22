import { Component, Prop } from "@stencil/core";

@Component({
  tag: "mwc-app",
  styleUrl: "mwc-app.scss"
})
export class MyComponent {
  @Prop() surface: string;
  @Prop() primary: string;
  @Prop() secondary: string;
  @Prop() background: string;
  @Prop() textOnsurface: string;
  @Prop() textOnprimary: string;
  @Prop() textOnsecondary: string;

  componentWillLoad() {
    this.setCssVariables();
  }

  componentDidLoad() {
    document.querySelector("body").classList.add("mdc-typography");
  }

  setCssVariables() {
    const doc = document.documentElement;

    if (this.surface) {
      doc.style.setProperty("--mdc-theme-surface", this.surface);
    }

    if (this.primary) {
      doc.style.setProperty("--mdc-theme-primary", this.primary);
    }

    if (this.secondary) {
      doc.style.setProperty("--mdc-theme-secondary", this.secondary);
    }

    if (this.background) {
      doc.style.setProperty("--mdc-theme-background", this.background);
    }

    if (this.textOnsurface) {
      doc.style.setProperty("--mdc-theme-on-surface", this.textOnsurface);
    }

    if (this.textOnprimary) {
      doc.style.setProperty("--mdc-theme-on-primary", this.textOnprimary);
    }

    if (this.textOnsecondary) {
      doc.style.setProperty("--mdc-theme-on-secondary", this.textOnsecondary);
    }
  }

  render() {
    return <slot />;
  }
}
