import React, { PureComponent } from 'react';
import INPUTS from '../data/inputs';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

export default class InputsForm extends PureComponent {
  render() {
    return (
      <div>
        {INPUTS.map((input) =>
          input.id === 3 ? <FormSelect key={input.id} /> : <FormInput {...input} key={input.id} />
        )}
      </div>
    );
  }
}
