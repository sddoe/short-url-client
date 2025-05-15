function TopUrlsList({ topUrls, onClickShortUrl }) {
  const handleClick = (e, shortCode) => {
    e.preventDefault();
    window.open(`http://localhost:3000/${shortCode}`, '_blank');
    onClickShortUrl(shortCode);
  };

  return (
    <div>
      <h2>Top 100 URLs</h2>
      <ul>
        {(topUrls || []).map((url) => (
          <li key={url.short_code}>
            <a
              href={`http://localhost:3000/${url.short_code}`}
              onClick={(e) => handleClick(e, url.short_code)}
            >
              {url.short_code}
            </a> - {url.full_url} (Hits: {url.click_count})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopUrlsList;
