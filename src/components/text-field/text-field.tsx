import { MDCTextField } from "@material/textfield";
import { Component, Element, Prop, State } from "@stencil/core";

import { keysToString } from "../../utils/strings";

@Component({
  tag: "mwc-text-field",
  styleUrl: "text-field.scss"
})
export class TextField {
  @Element() el: HTMLElement;

  @Prop() id: string;
  @Prop() type: string;
  @Prop() box: boolean;
  @Prop() tag = "input";
  @Prop() label: string;
  @Prop() ripple = true;
  @Prop() dense: boolean;
  @Prop() outlined: boolean;
  @Prop() disabled: boolean;
  @Prop() fullWidth: boolean;
  @Prop() helperText: string;
  @Prop() placeholder: string;
  @Prop() leadingIcon: string;
  @Prop() trailingIcon: string;
  @Prop() helperTextPersistent: boolean;

  @State() isFocused = false;

  instance: MDCTextField;

  getClasses(): string {
    const classes = {
      "mdc-text-field": true,
      "mdc-text-field--box": this.box,
      "mdc-text-field--dense": this.dense,
      "mdc-text-field--outlined": this.outlined,
      "mdc-text-field--fullwidth": this.fullWidth,
      "mdc-text-field--with-leading-icon": this.leadingIcon,
      "mdc-text-field--with-trailing-icon": this.trailingIcon,
      "mdc-text-field--textarea": this.tag.toLowerCase() === "textarea"
    };

    return keysToString(classes);
  }

  getHelperTextClasses(): string {
    const classes = {
      "mdc-text-field-helper-text": true,
      "mdc-text-field-helper-text--persistent": this.helperTextPersistent
    };

    return keysToString(classes);
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
    const helperTextId = this.id && `${this.id}__helper`;

    return [
      <div class={this.getClasses()}>
        {this.leadingIcon && <mwc-icon name={this.leadingIcon} />}
        <this.tag
          id={this.id}
          type={this.type}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          aria-controls={helperTextId}
          class="mdc-text-field__input"
          aria-describedby={helperTextId}
          placeholder={this.isPlaceholderVisible()}
        />
        {this.trailingIcon && <mwc-icon name={this.trailingIcon} />}
        {this.label && (
          <label htmlfor={this.id} class="mdc-floating-label">
            {this.label}
          </label>
        )}
        {this.outlined && [
          <div class="mdc-notched-outline">
            <svg>
              <path class="mdc-notched-outline__path" />
            </svg>
          </div>,
          <div class="mdc-notched-outline__idle" />
        ]}
        {!this.outlined && this.ripple && <div class="mdc-line-ripple" />}
      </div>,
      this.helperText && (
        <p
          id={helperTextId}
          aria-hidden="true"
          class={this.getHelperTextClasses()}
        >
          {this.helperText}
        </p>
      )
    ];
  }
}
