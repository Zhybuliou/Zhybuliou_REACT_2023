import { HashRouter } from 'react-router-dom';
import { describe, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';
import FormInput from './components/FormInput';

const setup = () => {
  render(
    <HashRouter>
      <App />
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
    expect(screen.getByText(/Kakashi Hatake/i)).toBeDefined();
  });
  test('Check render SearchBox', () => {
    setup();
    expect(screen.getByPlaceholderText('search ...')).toBeInTheDocument();
  });

  test('It should keep a value in front of the input', () => {
    setup();
    const input = screen.getByPlaceholderText('search ...') as HTMLInputElement;
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
    render(<FormInput {...dataInput} />);
    expect(screen.getByPlaceholderText('Your name...')).toBeInTheDocument();
  });

  test('It should keep a value in front of the input', () => {
    render(<FormInput {...dataInput} />);
    const input = screen.getByPlaceholderText('Your name...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'text' } });
    expect(input.value).toBe('text');
  });
});
