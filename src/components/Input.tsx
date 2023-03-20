import { PureComponent } from 'react';

type MyPropsInput = {
  placeholder: string;
  handleChange: (value: string) => void;
  classInput: string;
  typeInput: string;
  valueInput: string;
};

export default class Input extends PureComponent<MyPropsInput> {
  render() {
    const { valueInput, typeInput, classInput, placeholder, handleChange } = this.props;
    return (
      <input
        value={valueInput}
        type={typeInput}
        className={classInput}
        placeholder={placeholder}
        onChange={(e) => handleChange(e.target.value)}
      />
    );
  }
}
