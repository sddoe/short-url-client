import { render, screen } from '@testing-library/react';
import ShortUrlResult from './ShortUrlResult';

describe('ShortUrlResult', () => {
  it('renders nothing if no shortCode is passed', () => {
    const { container } = render(<ShortUrlResult shortCode={null} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders shortened URL if shortCode is provided', () => {
    render(<ShortUrlResult shortCode="abc123" />);
    expect(screen.getByText(/your shortened url/i)).toBeInTheDocument();
    expect(screen.getByText(/abc123/)).toHaveAttribute(
      'href',
      'http://localhost:3000/abc123'
    );
  });
});
