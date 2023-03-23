import React, { Component } from 'react';

interface IValueInput {
  id?: number;
  name?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  message?: string;
  label?: string;
  pattern?: string;
  required?: boolean;
  value?: string;
  checkErrorInput: boolean;
}

export default class FormInput extends Component<IValueInput> {
  private inputValue: React.RefObject<HTMLInputElement>;

  constructor(props: IValueInput) {
    super(props);
    this.inputValue = React.createRef();
  }

  render() {
    const {
      name,
      label,
      type,
      required,
      placeholder,
      message,
      pattern,
      errorMessage,
      checkErrorInput,
      value,
    } = this.props;
    return (
      <>
        <label htmlFor={name}>{label}</label>
        <input
          role={name}
          id={name}
          ref={this.inputValue}
          type={type}
          required={required}
          placeholder={placeholder}
          name={name}
          defaultChecked={name === 'radio'}
          defaultValue={value}
        />
        <span className="input-message">{message}</span>
        {['name', 'image', 'data'].includes(`${name}`) &&
          !this.inputValue.current?.value.match(`${pattern}`)?.input && (
            <p className={checkErrorInput ? 'error-message hide-message' : 'error-message'}>
              {errorMessage}
            </p>
          )}
      </>
    );
  }
}
