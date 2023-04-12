import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { IState } from '../types/types';
import FormCard from './FormCard';
import { RootState } from '../store';

export default function FormCards() {
  const formValue = useSelector((state: RootState) => state.from.form);
  console.log(formValue);
  return (
    <div className="form-wrapper-cards">
      {formValue.map((card) => (
        <FormCard {...card} key={uuidv4()} />
      ))}
    </div>
  );
}
