import { render, screen } from '@testing-library/react';
import App from './App';

test('renders open modal element', () => {
  render(<App />);
  const element = screen.getByText(/open modal/i);
  expect(element).toBeInTheDocument();
});
