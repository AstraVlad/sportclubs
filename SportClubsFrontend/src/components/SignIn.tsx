import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Link,
} from '@mui/material';

const sxBoxOne = {
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  padding: '25px',
  borderRadius: 5,
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const sxSubmitButton = {
  mt: 3,
  mb: 2,
  background: '#4741DE',
  letterSpacing: 1.25,
};

const sxForgotLinkTypography = {
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 1.25,
};

const sxTitleTypography = { letterSpacing: 0.25, fontSize: 34 };

export default function SignIn() {
  

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={sxBoxOne}>
        <Typography component="h1" variant="h5" sx={sxTitleTypography}>
          Sign In
        </Typography>
        <Box component="form"  noValidate>
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={sxSubmitButton}
          >
            Sign In
          </Button>
          <Link href="/some-page" underline="none" color="#4741DE">
            <Typography variant="body2" sx={sxForgotLinkTypography}>
              forgot password
            </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
