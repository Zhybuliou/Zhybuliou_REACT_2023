import React, { PureComponent } from 'react';

export default class FormSelect extends PureComponent {
  render() {
    return (
      <div>
        <label className="select-input" htmlFor="select">
          Department:
          <select name="select" id="select">
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Development">Development</option>
          </select>
        </label>
      </div>
    );
  }
}
