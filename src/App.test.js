import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders main heading and components', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /url shortener/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /shorten/i })).toBeInTheDocument();
    expect(screen.getByText(/top 100 urls/i)).toBeInTheDocument();
  });
});
