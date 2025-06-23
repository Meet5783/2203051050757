import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarAlert = ({ open, handleClose, severity, message }) => (
  <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
    <Alert onClose={handleClose} severity={severity}>{message}</Alert>
  </Snackbar>
);

export default SnackbarAlert;
