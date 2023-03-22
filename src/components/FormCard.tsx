import { PureComponent } from 'react';

interface IFormCard {
  name: string;
  data: string;
  select: string;
  check: string;
  radio: string;
  image?: Blob;
}

export default class FormCard extends PureComponent<IFormCard> {
  render() {
    const { image, name, data, select, radio, check } = this.props;
    return (
      <div className="form-card">
        <div className="form-card-header">
          {image && (
            <img className="form-card-avatar" alt={name} src={URL.createObjectURL(image)} />
          )}
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
}
