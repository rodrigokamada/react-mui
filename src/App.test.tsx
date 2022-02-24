import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react material ui', () => {
  render(<App />);
  const element = screen.getAllByText(/react material ui/i);
  expect(element).toHaveLength(2);
});
