import React, { useEffect, useState } from 'react';
import URLShortenerForm from '../components/URLShortenerForm';
import LinkList from '../components/LinkList';
import { fetchAllUrls } from '../utils/api';

const HomePage = () => {
  const [urls, setUrls] = useState([]);

  const refreshUrls = async () => {
    const res = await fetchAllUrls();
    setUrls(res.data);
  };

  useEffect(() => { refreshUrls(); }, []);

  return (
    <div>
      <URLShortenerForm refreshUrls={refreshUrls} />
      <LinkList urls={urls} />
    </div>
  );
};

export default HomePage;
