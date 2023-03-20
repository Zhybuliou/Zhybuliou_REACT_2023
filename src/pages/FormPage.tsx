import React, { Component } from 'react';

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
        <form id="form" className="form" name="control-ref" ref={this.formRadio} />
        <input className="form-button" type="submit" value="Send" />
      </>
    );
  }
}
