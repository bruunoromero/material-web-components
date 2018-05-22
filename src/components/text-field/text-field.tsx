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

  hostData() {
    return {
      class: {
        "mdc-text-field": true,
        "mdc-text-field--box": this.box,
        "mdc-text-field--dense": this.dense,
        "mdc-text-field--outlined": this.outlined,
        "mdc-text-field--fullwidth": this.fullWidth,
        "mdc-text-field--textarea": this.tag.toLowerCase() === "textarea"
      }
    };
  }

  componentDidLoad() {
    this.instance = new MDCTextField(this.el);
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
      <slot>
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
        {this.ripple && <div class="mdc-line-ripple" />}
      </slot>
    );
  }
}
