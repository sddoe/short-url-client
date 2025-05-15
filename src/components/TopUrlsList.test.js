import { render, screen, waitFor } from '@testing-library/react';
import TopUrlsList from './TopUrlsList';
import { fetchTopUrls } from '../api';

jest.mock('../api');

describe('TopUrlsList', () => {
  it('fetches and displays top URLs', async () => {
    const mockUrls = [
      {
        short_code: 'abc123',
        full_url: 'https://google.com',
        click_count: 5,
      },
    ];

    render(<TopUrlsList topUrls={mockUrls} onClickShortUrl={() => {}} />);

    await waitFor(() =>
      expect(screen.getByText(/google.com/i)).toBeInTheDocument()
    );

    expect(screen.getByText(/abc123/i)).toHaveAttribute(
      'href',
      'http://localhost:3000/abc123'
    );
    expect(screen.getByText(/hits: 5/i)).toBeInTheDocument();
  });

  it('shows empty list on error', async () => {
    fetchTopUrls.mockRejectedValueOnce(new Error('API error'));

    render(<TopUrlsList />);
    await waitFor(() =>
      expect(screen.queryByRole('listitem')).not.toBeInTheDocument()
    );
  });
});
