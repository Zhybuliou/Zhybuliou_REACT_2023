import { PureComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IState } from '../types/types';
import FormCard from './FormCard';

export default class FormCards extends PureComponent<IState> {
  render() {
    const { formValue } = this.props;
    return (
      <div className="form-wrapper-cards">
        {formValue.map((card) => (
          <FormCard {...card} key={uuidv4()} />
        ))}
      </div>
    );
  }
}
