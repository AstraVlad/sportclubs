import {
  Button,
  TextField,
  Box,
  Typography,
  Container,
  Card,
} from "@mui/material"

import CommonLink from "./CommonLink"


const sxCard = {
  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
  padding: "25px",
  marginTop: 8,
}

const sxSubmitButton = {
  mt: 3,
  mb: 2,
  background: "#4741DE",
  letterSpacing: 1.25,
}

const sxForgotLinkTypography = {
  fontWeight: 600,
  fontSize: 14,
  letterSpacing: 1.25,
}

const sxTitleTypography = {letterSpacing: 0.25, fontSize: 34}

export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Card sx={sxCard}>
        <Typography component="h1" variant="h5" sx={sxTitleTypography}>
          Sign In
        </Typography>
        <Box component="form" noValidate>
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
          <CommonLink url="/forgot" text="forgot password" />
        </Box>
      </Card>
    </Container>
  )
}
