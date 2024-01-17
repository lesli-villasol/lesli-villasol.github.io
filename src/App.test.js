import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders two buttons with value 0 initially ', () => {
  render(<App />);
  const counterButtons = screen.getAllByRole('button', { name: /clicked 0 times/i })
  expect(counterButtons).toHaveLength(2);
});
