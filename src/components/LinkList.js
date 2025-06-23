import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const LinkList = ({ urls }) => (
  <List>
    {urls.map((url) => (
      <ListItem key={url._id}>
        <ListItemText primary={`Original: ${url.originalUrl}`} secondary={`Short: http://short.ly/${url.shortUrl}`} />
      </ListItem>
    ))}
  </List>
);

export default LinkList;
