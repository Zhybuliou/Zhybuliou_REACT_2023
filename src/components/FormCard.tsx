import { IFormCard } from '../types/types';

export default function FormCard({ imageUrl, name, data, select, radio, check }: IFormCard) {
  return (
    <div className="form-card">
      <div className="form-card-header">
        <img className="form-card-avatar" alt={name} src={imageUrl} />
        <div className="form-card-content">
          <h3>{name}</h3>
          <ul>
            <li>
              <span>Birthday:</span>
              {data}
            </li>
            <li>
              <span>Department:</span>
              {select}
            </li>
            <li>
              <span>Gender: </span>
              {radio}
            </li>
            <li>
              <span>Relocate: </span>
              {check || 'no'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
