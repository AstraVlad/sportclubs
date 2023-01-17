import {Dialog, TextField, Box} from "@mui/material"

import ButtonForm from "./modalFormComponents/ButtonForm"
import Subtitle from "./modalFormComponents/Subtitle"
import Title from "./modalFormComponents/Title"


const sxDialog = {
  style: {
    borderRadius: 20,
  },
}

export default function AthleteForm() {
  return (
    <Dialog open={true} maxWidth="xs" PaperProps={sxDialog}>
      <Box m={2} component="form">
        <Title text="Create a club" />
        <Subtitle text="Name your group and add members" />
        <TextField
          size="small"
          margin="normal"
          fullWidth
          label="Group name"
          name="grop-name"
          autoComplete="group-name"
        />
        <ButtonForm text="add member" />
      </Box>
    </Dialog>
  )
}
