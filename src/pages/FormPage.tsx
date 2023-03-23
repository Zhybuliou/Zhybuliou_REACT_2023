import React, { Component } from 'react';
import FormCards from '../components/FormCards';
import FormInput from '../components/FormInput';
import FormSelect from '../components/FormSelect';
import INPUTS from '../data/inputs';

interface IState {
  formValue: {
    name: string;
    data: string;
    select: string;
    check: string;
    radio: string;
    image?: Blob;
  }[];
  submitButton: boolean;
  checkErrorForm: boolean;
  sendForm: boolean;
  checkErrorInput: boolean;
}
type MyProps = {
  children?: React.ReactNode;
};

export default class FormPage extends Component<MyProps, IState> {
  private formRadio: React.RefObject<HTMLFormElement>;

  constructor(props: MyProps) {
    super(props);
    this.state = {
      formValue: [],
      submitButton: true,
      checkErrorForm: false,
      sendForm: false,
      checkErrorInput: true,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.formRadio = React.createRef();
  }

  handleChange() {
    const { checkErrorForm } = this.state;
    if (checkErrorForm) {
      this.setState({ submitButton: false });
    }
    this.setState({ submitButton: false });
    this.setState({ sendForm: false });
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const myForm = this.formRadio.current as HTMLFormElement;
    const formObject = new FormData(myForm);
    const currentState = Object.fromEntries(formObject.entries());
    const name = currentState.name as string;
    const data = currentState.data as string;
    const select = currentState.select as string;
    const check = currentState.check as string;
    const radio = currentState.radio as string;
    const image = currentState.image as Blob;
    const { formValue } = this.state;
    if (!name || !data || !image.name) {
      this.setState({ checkErrorInput: false });
      this.setState({ submitButton: true });
      this.setState({ checkErrorForm: true });
    } else {
      this.setState({ formValue: [...formValue, { name, data, select, check, radio, image }] });
      this.formRadio.current?.reset();
      this.setState({ checkErrorForm: false });
      this.setState({ submitButton: true });
      this.setState({ sendForm: true });
      this.setState({ checkErrorInput: true });
    }
  }

  render() {
    const { submitButton, sendForm, checkErrorInput } = this.state;
    return (
      <>
        <h2>Form</h2>
        <form
          id="form"
          className="form"
          name="control-ref"
          ref={this.formRadio}
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
        >
          <div>
            {INPUTS.map((input) =>
              input.id === 3 ? (
                <FormSelect key={input.id} />
              ) : (
                <FormInput {...input} key={input.id} checkErrorInput={checkErrorInput} />
              )
            )}
          </div>
          <input className="form-button" type="submit" value="Send" disabled={submitButton} />
          {sendForm && <p className="form-send">Your form has been submitted successfully!</p>}
        </form>
        <FormCards {...this.state} />
      </>
    );
  }
}
