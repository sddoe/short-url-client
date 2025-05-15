import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import UrlForm from './UrlForm';
import { submitUrl } from '../api';

jest.mock('../api');

describe('UrlForm', () => {
  it('submits a URL and calls onSuccess', async () => {
    const mockUrl = 'https://google.com';
    const mockShortCode = 'abc123';
    const onSuccess = jest.fn();

    submitUrl.mockResolvedValueOnce({
      data: { short_code: mockShortCode },
    });

    render(<UrlForm onSuccess={onSuccess} />);
    fireEvent.change(screen.getByPlaceholderText(/enter url/i), {
      target: { value: mockUrl },
    });
    fireEvent.click(screen.getByText(/shorten/i));

    await waitFor(() => {
      expect(onSuccess).toHaveBeenCalledWith({ short_code: mockShortCode });
    });
  });

  it('shows error on invalid URL', async () => {
    submitUrl.mockRejectedValueOnce(new Error('Invalid'));

    render(<UrlForm onSuccess={jest.fn()} />);
    fireEvent.change(screen.getByPlaceholderText(/enter url/i), {
      target: { value: 'not-a-url' },
    });
    fireEvent.click(screen.getByText(/shorten/i));

    await waitFor(() =>
      expect(screen.getByText(/invalid url/i)).toBeInTheDocument()
    );
  });
});
