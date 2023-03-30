import React, { useRef } from 'react';
import { IValueInput } from '../types/types';

export default function FormInput({
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
}: IValueInput) {
  const inputValue = useRef() as React.RefObject<HTMLInputElement>;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        role={name}
        id={name}
        ref={inputValue}
        type={type}
        required={required}
        placeholder={placeholder}
        name={name}
        defaultChecked={name === 'radio'}
        defaultValue={value}
      />
      <span className="input-message">{message}</span>
      {['name', 'image', 'data'].includes(`${name}`) &&
        !inputValue.current?.value.match(`${pattern}`)?.input && (
          <p className={checkErrorInput ? 'error-message hide-message' : 'error-message'}>
            {errorMessage}
          </p>
        )}
    </>
  );
}
