import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/balance/i);
  linkElements.forEach((e) => expect(e).toBeInTheDocument());
});
