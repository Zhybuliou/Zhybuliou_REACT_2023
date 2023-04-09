export interface IState {
  formValue: IFormCard[];
  submitButton?: boolean;
  checkErrorForm?: boolean;
  sendForm?: boolean;
  checkErrorInput?: boolean;
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
  imageUrl?: string;
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
export type CardType = {
  title: string;
  image: string;
  oldPrice: string;
  newPrice: string;
  dollars: string;
  alt: string;
  expdate: string;
};
export interface Character {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: {
    name?: string;
    url?: string;
  };
  location?: {
    name: string;
    url: string;
  };
  image?: string;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface Props {
  changeContent: (character?: Character[]) => Promise<void>;
  popupContent?: Character[] | undefined;
}
