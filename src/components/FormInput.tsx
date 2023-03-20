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
}
interface IStateInput {
  focused: boolean;
  selectedInput: boolean;
}

export default class FormInput extends Component<IValueInput, IStateInput> {
  private inputValue: React.RefObject<HTMLInputElement>;

  constructor(props: IValueInput) {
    super(props);
    this.state = {
      focused: false,
      selectedInput: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputValue = React.createRef();
  }

  handleChange = () => {
    const { focused } = this.state;
    this.setState({ focused: !focused });
  };

  render() {
    const { name, label, type, required, placeholder, value, message, pattern, errorMessage } =
      this.props;
    const { focused, selectedInput } = this.state;
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
          value={value}
          onChange={this.handleChange}
          data-focused={focused}
          checked={name === 'radio' ? true : selectedInput}
        />
        <span className="input-message">{message}</span>
        {['name', 'image', 'data'].includes(`${name}`) &&
          !this.inputValue.current?.value.match(`${pattern}`)?.input && (
            <p className="error-message hide-message">{errorMessage}</p>
          )}
      </>
    );
  }
}
