import Dialog from '@mui/material/Dialog';
import { TextField, Box, Typography } from '@mui/material';
import ButtonForm from './modalFormComponents/ButtonForm';
import { sxDialog } from '../styles/modalStyles';
import Title from './modalFormComponents/Title';
import Subtitle from './modalFormComponents/Subtitle';

export default function AthleteForm() {
  return (
    <Dialog open={true} maxWidth="xs" PaperProps={sxDialog}>
      <Box m={2} component="form">
        <Title text="Adding a member" />
        <Subtitle text="Fill in all the fields" />
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
        <ButtonForm text="next" />
      </Box>
    </Dialog>
  )
}
