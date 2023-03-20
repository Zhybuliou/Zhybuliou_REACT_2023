import React, { Component } from 'react';
import InputsForm from '../components/Inputs';

type MyProps = {
  children?: React.ReactNode;
};

export default class FormPage extends Component<MyProps> {
  private formRadio: React.RefObject<HTMLFormElement>;

  constructor(props: MyProps) {
    super(props);

    this.formRadio = React.createRef();
  }

  render() {
    return (
      <>
        <h2>Form</h2>
        <form id="form" className="form" name="control-ref" ref={this.formRadio}>
          <InputsForm />
          <input className="form-button" type="submit" value="Send" />
        </form>
      </>
    );
  }
}
