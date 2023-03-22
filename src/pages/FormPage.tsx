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
    const allMassage = Array.from(document.querySelectorAll('.error-message')).length - 1;
    if (allMassage) {
      this.setState({ submitButton: false });
    }
    this.setState({ sendForm: false });
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { formValue } = this.state;
    const allMassage = document.querySelectorAll('.error-message');
    if (Array.from(allMassage).length) {
      Array.from(allMassage).forEach((error) => error.classList.remove('hide-message'));
      this.setState({ submitButton: true });
      this.setState({ checkErrorForm: true });
    } else {
      const myForm = this.formRadio.current as HTMLFormElement;
      const formObject = new FormData(myForm);
      const currentState = Object.fromEntries(formObject.entries());
      const name = currentState.name as string;
      const data = currentState.data as string;
      const select = currentState.select as string;
      const check = currentState.check as string;
      const radio = currentState.radio as string;
      const image = currentState.image as Blob;
      formValue.push({ name, data, select, check, radio, image });
      this.setState({ formValue });
      this.formRadio.current?.reset();
      this.setState({ checkErrorForm: false });
      this.setState({ submitButton: true });
      this.setState({ sendForm: true });
    }
  }

  render() {
    const { submitButton, sendForm } = this.state;
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
                <FormInput {...input} key={input.id} />
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
