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
interface IStateInput {
  selectedInput: boolean;
}

export default class FormInput extends Component<IValueInput, IStateInput> {
  private inputValue: React.RefObject<HTMLInputElement>;

  constructor(props: IValueInput) {
    super(props);
    this.state = {
      selectedInput: false,
    };
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
    } = this.props;
    const { selectedInput } = this.state;
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
          defaultChecked={name === 'radio' ? true : selectedInput}
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
