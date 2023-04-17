import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import FormCard from './FormCard';
import { RootState } from '../store';

export default function FormCards() {
  const formValue = useSelector((state: RootState) => state.from.form);
  return (
    <div className="form-wrapper-cards">
      {formValue.map((card) => (
        <FormCard {...card} key={uuidv4()} />
      ))}
    </div>
  );
}
