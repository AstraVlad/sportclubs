import {
    TextField,
    Box,
    Typography,
    Container,
    Card
  } from '@mui/material';
import CommonButton from './CommonButton';
  
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
  const sxCard = {
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
    padding: '15px',
    borderRadius: 5
  };
 
  
  export default function ClubCreationForm() {
    return (
      <Container component="main" maxWidth="xs" >
        <Card sx={sxCard}>
          <Typography component="h1" variant="h5" sx={sxTitleTypography} >
            Create a club
          </Typography>
          <Box component="form">
            <Typography component="p" color="#888888" sx={sxSubtitleTypography}>
            Name your group and add members
            </Typography>
            <TextField
              size="small"
              margin="normal"
              fullWidth
              label="Group name"
              name="group-name"
              autoComplete="group-name"
            />
            <CommonButton text="add member"/>
          </Box>
        </Card>
      </Container>
    );
  }
  