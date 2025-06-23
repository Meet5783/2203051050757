import React, { useEffect, useState } from 'react';
import StatsTable from '../components/StatsTable';
import { fetchAllUrls } from '../utils/api';

const StatsPage = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllUrls();
      setUrls(res.data);
    };
    fetchData();
  }, []);

  return <StatsTable urls={urls} />;
};

export default StatsPage;
