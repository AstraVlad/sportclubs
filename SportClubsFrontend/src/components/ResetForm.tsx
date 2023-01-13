import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Card
} from '@mui/material';

import CommonLink from './CommonLink';

const sxTitleTypography = {
  letterSpacing: 0.25,
  fontSize: 20,
  fontWeight: 500,
  mt: 1,
};
const sxSubtitleTypography = { 
  fontWeight: 500,
  fontSize: 16,
  mb: 2, 
  mt: 2
};
const sxBoxOne = {
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  padding: '15px',
  marginTop: 8,
};
const sxSubmitButton = {
  mt: 3,
  mb: 2,
  letterSpacing: 1.25,
};

export default function ResetForm() {
  return (
    <Container component="main" maxWidth="xs">
      <Card sx={sxBoxOne}>
        <Typography component="h1" variant="h5" sx={sxTitleTypography} >
          Reset password
        </Typography>
        <Box component="form">
          <Typography component="p" color="#888888" sx={sxSubtitleTypography}>
            You will receive an e-mail in maximum 60 seconds
          </Typography>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            label="Email Adress"
            name="email"
            autoComplete="email"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={sxSubmitButton}
          >
            send
          </Button>
          <CommonLink url="/signin" text="sign in"/>
        </Box>
      </Card>
    </Container>
  );
}
