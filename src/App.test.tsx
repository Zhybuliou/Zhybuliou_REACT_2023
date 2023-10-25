import { HashRouter } from 'react-router-dom';
import { describe, test } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import NotFoundPage from './pages/NotFoundPage';

const setup = () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
};

describe('Componets test', () => {
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

  test('Check render Apout Page', () => {
    setup();
    const linkAbout = screen.getByTestId('link-about');
    fireEvent.click(linkAbout);
    expect(screen.getAllByText(/About/i)).toBeDefined();
  });

  test('Check render 404 Page', () => {
    render(<NotFoundPage />);
    expect(screen.getAllByText(/404 Page/i)).toBeDefined();
  });
});
