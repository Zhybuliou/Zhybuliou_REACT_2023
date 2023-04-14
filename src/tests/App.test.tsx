import { HashRouter } from 'react-router-dom';
import { describe, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import NotFoundPage from '../pages/NotFoundPage';
import FormInput from '../components/FormInput';
import FormCard from '../components/FormCard';
import store from '../store';

const setup = () => {
  render(
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
};
const dataInput = {
  id: 1,
  name: 'name',
  type: 'text',
  placeholder: 'Your name...',
  errorMessage:
    "Username should be 3-16 characters US and shouldn't include any special character!",
  message: '',
  label: 'Username*',
  pattern: '^[A-Za-z0-9]{3,16}$',
  required: false,
};

describe('Components test', () => {
  test('Check render Home Page', () => {
    setup();
    expect(screen.getByText(/Loading..../i)).toBeDefined();
  });
  test('Check render SearchBox', () => {
    setup();
    expect(screen.getByPlaceholderText('search character ...')).toBeInTheDocument();
  });

  test('It should keep a value in front of the input', () => {
    setup();
    const input = screen.getByPlaceholderText('search character ...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'text' } });
    expect(input.value).toBe('text');
  });

  test('Check render About Page', () => {
    setup();
    const linkAbout = screen.getByTestId('link-about');
    fireEvent.click(linkAbout);
    expect(screen.getAllByText(/About/i)).toBeDefined();
  });

  test('Check render 404 Page', () => {
    render(<NotFoundPage />);
    expect(screen.getAllByText(/404 Page/i)).toBeDefined();
  });

  test('Check render page Form', () => {
    setup();
    const linkForm = screen.getByTestId('link-form');
    fireEvent.click(linkForm);
    expect(screen.getAllByText(/Form/i)).toBeDefined();
  });

  test('Check render input Form', () => {
    render(<FormInput checkErrorInput={false} {...dataInput} />);
    expect(screen.getByPlaceholderText('Your name...')).toBeInTheDocument();
  });

  test('It should keep a value in front of the input', () => {
    render(<FormInput checkErrorInput={false} {...dataInput} />);
    const input = screen.getByPlaceholderText('Your name...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'text' } });
    expect(input.value).toBe('text');
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
