import { HashRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../App';
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

describe('Test API Home Page', () => {
  it('Check render all 20 cards', async () => {
    await setup();
    const card = (await screen.findAllByTestId(/card/i)) as HTMLElement[];
    expect(await card.length).toBe(20);
  });
  it('Check popup', async () => {
    await setup();
    const card = (await screen.findAllByTestId(/card/i)) as HTMLElement[];
    await fireEvent.click(card[1]);
    expect(await screen.findByTestId(/popup/i)).toBeInTheDocument();
  });
});
