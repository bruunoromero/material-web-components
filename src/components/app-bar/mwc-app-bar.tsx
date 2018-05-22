import { MDCTopAppBar } from "@material/top-app-bar";
import { Component, Element } from "@stencil/core";

@Component({
  tag: "mwc-app-bar",
  styleUrl: "mwc-app-bar.scss"
})
export class MyComponent {
  @Element() el: HTMLElement;

  componentDidLoad() {
    const header = this.el.querySelector("header");
    new MDCTopAppBar(header);
  }

  render() {
    return (
      <header class="mdc-top-app-bar mdc-top-app-bar--fixed">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">
              menu
            </a>
            <span class="mdc-top-app-bar__title">Title</span>
          </section>
        </div>
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <a href="#" class="material-icons mdc-top-app-bar__navigation-icon">
              menu
            </a>
            <span class="mdc-top-app-bar__title">Title</span>
          </section>
        </div>
      </header>
    );
  }
}
