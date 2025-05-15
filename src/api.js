import axios from 'axios';
const API_BASE_URL = 'http://localhost:3000';

export const submitUrl = async (fullUrl) => {
  return await axios.post(`${API_BASE_URL}/short_urls.json`, { full_url: fullUrl });
};

export const fetchTopUrls = async () => {
  return await axios.get(`${API_BASE_URL}/short_urls.json`);
};
