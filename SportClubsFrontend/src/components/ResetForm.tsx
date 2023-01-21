import {TextField, Box, Container, Card} from "@mui/material"

import {sxCard} from "../styles/modalStyles"

import ButtonForm from "./modalFormComponents/ButtonForm"
import CommonLink from "./modalFormComponents/CommonLink"
import Subtitle from "./modalFormComponents/Subtitle"
import Title from "./modalFormComponents/Title"


export default function ResetForm() {
  return (
    <Container component="main" maxWidth="xs">
      <Card sx={sxCard}>
        <Title text="Reset password" />
        <Subtitle text="You will receive an e-mail in maximum 60 seconds" />
        <Box component="form">
          <TextField
            size="small"
            margin="normal"
            required
            fullWidth
            label="Email Adress"
            name="email"
            autoComplete="email"
          />
          <ButtonForm text="send" />
          <CommonLink url="/signin" text="sign in" />
        </Box>
      </Card>
    </Container>
  )
}
