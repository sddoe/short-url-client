function ShortUrlResult({ shortCode }) {
  if (!shortCode) return null;
  return (
    <div>
      <h3>Your shortened URL:</h3>
      <a href={`http://localhost:3000/${shortCode}`} target="_blank" rel="noopener noreferrer">
        {`http://localhost:3000/${shortCode}`}
      </a>
    </div>
  );
}

export default ShortUrlResult;
