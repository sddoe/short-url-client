import { useState } from 'react';
import { submitUrl } from '../api';

function UrlForm({ onSuccess }) {
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitUrl(url);
      onSuccess(response.data);
      setUrl('');
      setError('');
    } catch (err) {
      setError('Invalid URL. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <button type="submit">Shorten</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default UrlForm;
