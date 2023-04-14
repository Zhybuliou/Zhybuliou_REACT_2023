import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../store';

const setup = () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
};

describe('Test API Home Page', async () => {
  it('Check render all 20 cards', async () => {
    await setup();
    const card = (await screen.queryAllByTestId(/card/i)) as HTMLElement[];
    expect(await card.length).toBe(0);
  });
  it('Check popup', async () => {
    await setup();
    const card = (await screen.findAllByTestId(/card/i)) as HTMLElement[];
    await fireEvent.click(card[1]);
    expect(await screen.findByTestId(/popup/i)).toBeInTheDocument();
  });
  it('Check button search', async () => {
    await setup();
    const input = screen.getByPlaceholderText('search character ...') as HTMLInputElement;
    const button = screen.getByTestId('button');
    fireEvent.change(input, { target: { value: 'text' } });
    await fireEvent.click(button);
    expect(await screen.findByText(/Nothing found. Please try again./i)).toBeInTheDocument();
  });
});
