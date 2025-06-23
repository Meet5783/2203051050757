import React from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const StatsTable = ({ urls }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Original URL</TableCell>
        <TableCell>Short URL</TableCell>
        <TableCell>Created At</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {urls.map((url) => (
        <TableRow key={url._id}>
          <TableCell>{url.originalUrl}</TableCell>
          <TableCell>{`http://short.ly/${url.shortUrl}`}</TableCell>
          <TableCell>{new Date(url.createdAt).toLocaleString()}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default StatsTable;
