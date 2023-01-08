
import {  Button, TextField, Box, Typography, Container,Link} from '@mui/material';


export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
 
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
            padding:'25px',
            borderRadius:5,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5" sx={{letterSpacing: 0.25, fontSize:34 }}>
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,  }}>
            <TextField
              size="small"
              margin="normal"
              required
              fullWidth
              id="email"
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
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , 
                background: '#4741DE',  letterSpacing:1.25}}
            >
              Sign In
            </Button>
            <Link href="/some-page"  underline="none" color='#4741DE'>
                <Typography variant="body2" sx={{fontWeight:600,fontSize:14, letterSpacing:1.25}}>forgot password</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
  );
}