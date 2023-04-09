import { HashRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

const setup = () => {
  render(
    <HashRouter>
      <App />
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
