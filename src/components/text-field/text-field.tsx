import { MDCTextField } from "@material/textfield";
import { Component, Element, Prop, State } from "@stencil/core";

@Component({
  tag: "mwc-text-field",
  styleUrl: "text-field.scss"
})
export class TextField {
  @Element() el: HTMLElement;

  @Prop() id: string;
  @Prop() tag = "input";
  @Prop() type: string;
  @Prop() box: boolean;
  @Prop() label: string;
  @Prop() ripple = true;
  @Prop() dense: boolean;
  @Prop() outlined: boolean;
  @Prop() disabled: boolean;
  @Prop() fullWidth: boolean;
  @Prop() placeholder: string;

  @State() isFocused = false;

  instance: MDCTextField;

  getClasses(): string {
    const classes = {
      "mdc-text-field": true,
      "mdc-text-field--box": this.box,
      "mdc-text-field--dense": this.dense,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--fullwidth": this.fullWidth,
      "mdc-text-field--textarea": this.tag.toLowerCase() === "textarea"
    };

    return Object.keys(classes)
      .filter(key => classes[key])
      .join(" ");
  }

  componentDidLoad() {
    this.instance = new MDCTextField(this.el.querySelector(".mdc-text-field"));
  }

  componentDidUnload() {
    this.instance.destroy();
  }

  onFocus = () => {
    this.isFocused = true;
  };

  onBlur = () => {
    this.isFocused = false;
  };

  isPlaceholderVisible() {
    if (!this.label) return true;

    return this.isFocused && this.placeholder;
  }

  render() {
    return (
      <div class={this.getClasses()}>
        <this.tag
          id={this.id}
          type={this.type}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          class="mdc-text-field__input"
          placeholder={this.isPlaceholderVisible()}
        />
        {this.label && (
          <label htmlfor={this.id} class="mdc-floating-label">
            {this.label}
          </label>
        )}
        {this.outlined && (
          <div class="mdc-notched-outline">
            <svg>
              <path class="mdc-notched-outline__path" />
            </svg>
          </div>
        )}
        {this.outlined && <div class="mdc-notched-outline__idle" />}
        {!this.outlined && this.ripple && <div class="mdc-line-ripple" />}
      </div>
    );
  }
}
