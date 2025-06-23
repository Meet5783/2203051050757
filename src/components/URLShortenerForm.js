import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { shortenUrl } from '../utils/api';
import { isValidUrl } from '../utils/validationHelper';
import SnackbarAlert from './SnackbarAlert';

const URLShortenerForm = ({ refreshUrls }) => {
  const [url, setUrl] = useState('');
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'info' });

  const handleShorten = async () => {
    if (!isValidUrl(url)) {
      setAlert({ open: true, message: 'Invalid URL', severity: 'error' });
      return;
    }
    try {
      await shortenUrl(url);
      refreshUrls();
      setAlert({ open: true, message: 'URL shortened!', severity: 'success' });
    } catch {
      setAlert({ open: true, message: 'Error shortening URL', severity: 'error' });
    }
    setUrl('');
  };

  return (
    <>
      <TextField label="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)} />
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>
      <SnackbarAlert open={alert.open} handleClose={() => setAlert({ ...alert, open: false })} severity={alert.severity} message={alert.message} />
    </>
  );
};

export default URLShortenerForm;
