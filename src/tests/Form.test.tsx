import { describe, test } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import FormPage from '../pages/FormPage';
import FormCard from '../components/FormCard';
import App from '../App';
import store from '../store';

const setup = () => {
  const fileImage = [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })];
  const utils = render(
    <HashRouter>
      <Provider store={store}>
        <FormPage />
      </Provider>
    </HashRouter>
  );
  const input = utils.getByTestId(/name/i) as HTMLInputElement;
  const inputDate = utils.getByTestId(/data/i) as HTMLInputElement;
  const inputImage = utils.getByTestId(/image/i) as HTMLInputElement;
  const inputSubmit = utils.getByTestId(/form-button/i) as HTMLInputElement;
  return {
    input,
    inputSubmit,
    inputDate,
    inputImage,
    fileImage,
    utils,
  };
};
describe('Components test FormPage', () => {
  test('It should keep correct work button submit', () => {
    const { input, inputSubmit, inputDate } = setup();
    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.change(inputDate, { target: { value: '2020-05-12' } });
    fireEvent.click(inputSubmit);
    expect(input.value).toBe('Hello');
  });
  test('check render FormCard', () => {
    const card = {
      name: 'Bob',
      data: '23/12/2000',
      select: 'seal',
      check: '',
      radio: 'Mail',
      image: 'https://en.wikipedia.org/wiki/File:Image_created_with_a_mobile_phone.png',
    };
    render(<FormCard {...card} />);
    expect(screen.getByText(/Bob/i)).toBeInTheDocument();
    expect(screen.getByText(/seal/i)).toBeInTheDocument();
    expect(screen.getByText(/no/i)).toBeInTheDocument();
    expect(screen.getByText(/Mail/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Bob/i)).toBeInTheDocument();
  });
});
describe('Components test function FormPage', () => {
  test('Submit button must be Disabled', () => {
    const { inputSubmit } = setup();
    fireEvent.click(inputSubmit);
    expect(inputSubmit).toBeDisabled();
  });
  test('Submit button must be not Disabled', () => {
    const { input, inputSubmit, inputDate } = setup();
    fireEvent.change(input, { target: { value: 'Hello' } });
    fireEvent.change(inputDate, { target: { value: '2020-05-12' } });
    expect(inputSubmit).not.toBeDisabled();
  });
  test('Check image by input type file', async () => {
    const { input, inputSubmit, inputDate } = setup();
    await fireEvent.change(input, { target: { value: 'Hello' } });
    await fireEvent.change(inputDate, { target: { value: '2020-05-12' } });
    await fireEvent.click(inputSubmit);
    await waitFor(() => expect(screen.getByText(/Please select your image!/i)).toBeInTheDocument());
  });
});
