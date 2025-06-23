import axios from 'axios';

const API = '/api/urls';


export const shortenUrl = (originalUrl) => {
  const newUrl = {
    id: Date.now(),
    originalUrl,
    shortUrl: Math.random().toString(36).substring(7),
    createdAt: new Date().toISOString()
  };
  return axios.post(API, newUrl);
};

export const fetchAllUrls = () => axios.get(API);

export const deleteUrl = (id) => axios.delete(`${API}/${id}`);