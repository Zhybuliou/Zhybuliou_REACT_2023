export interface IState {
  formValue: IFormCard[];
  submitButton: boolean;
  checkErrorForm: boolean;
  sendForm: boolean;
  checkErrorInput: boolean;
}
export type MyProps = {
  children?: React.ReactNode;
};
export interface IFormCard {
  name: string;
  data: string;
  select: string;
  check: string;
  radio: string;
  image?: Blob;
}
export interface IValueInput {
  id?: number;
  name?: string;
  type?: string;
  placeholder?: string;
  errorMessage?: string;
  message?: string;
  label?: string;
  pattern?: string;
  required?: boolean;
  value?: string;
  checkErrorInput: boolean;
}
