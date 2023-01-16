import * as React from 'react';

import Dialog from '@mui/material/Dialog';

import { Button, TextField, Box, Typography } from '@mui/material';
import theme from '../styles/styles';


const sxDialog = {
  style: { 
    borderRadius: 20 
}
};

const sxButton = {
  mt: 2,
  mb: 1,
};

export default function AthleteForm() {
  return (
    <Dialog open={true} maxWidth="xs" PaperProps={sxDialog}>
      <Box m={2} component="form">
        <Typography component="h1" variant="h5" align="center">
          Adding a member
        </Typography>
        <Typography component="p" align="center" color={theme.palette.grey[600]}>
          Fill in all the fields
        </Typography>
        <TextField
          size="small"
          margin="normal"
          required
          fullWidth
          label="Name"
          name="name"
          autoComplete="name"
        />
        <TextField
          size="small"
          margin="normal"
          fullWidth
          label="Phone number"
          name="phone-number"
          autoComplete="phone-number"
        />
        <TextField
          size="small"
          margin="normal"
          fullWidth
          label="Email"
          name="email"
          autoComplete="email"
        />
        <TextField
          size="small"
          margin="normal"
          fullWidth
          label="Home Address"
          name="email"
          autoComplete="email"
        />
        <Button type="submit" fullWidth variant="contained" sx={sxButton}>
          send
        </Button>
      </Box>
    </Dialog>
  );
}
