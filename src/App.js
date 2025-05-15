import { useState, useEffect } from 'react';
import UrlForm from './components/UrlForm';
import TopUrlsList from './components/TopUrlsList';
import ShortUrlResult from './components/ShortUrlResult';
import { fetchTopUrls } from './api';

function App() {
  const [shortCode, setShortCode] = useState(null);
  const [topUrls, setTopUrls] = useState([]);

  const loadTopUrls = async () => {
    try {
      const response = await fetchTopUrls();
      setTopUrls(response.data?.urls || []);
    } catch (err) {
      console.error('Failed to fetch top URLs', err);
    }
  };

  useEffect(() => {
    loadTopUrls();
  }, []);

  const handleClick = (clickedCode) => {
    setTopUrls((prev) => {
      const updated = prev.map((url) =>
        url.short_code === clickedCode
          ? { ...url, click_count: url.click_count + 1 }
          : url
      );

      return updated.sort((a, b) => b.click_count - a.click_count);
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h1>URL Shortener</h1>
      <UrlForm onSuccess={(data) => {
        setShortCode(data.short_code);
        loadTopUrls();
      }} />
      <ShortUrlResult shortCode={shortCode} />
      <TopUrlsList topUrls={topUrls} onClickShortUrl={handleClick} />
    </div>
  );
}

export default App;
