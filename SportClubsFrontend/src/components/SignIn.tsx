import {TextField, Box, Container, Card} from "@mui/material"

import {sxCard} from "../styles/modalStyles"

import ButtonForm from "./modalFormComponents/ButtonForm"
import CommonLink from "./modalFormComponents/CommonLink"
import Title from "./modalFormComponents/Title"


export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Card sx={sxCard}>
        <Title text="Sign In" />
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
          <ButtonForm text="Sign In" />
          <CommonLink url="/forgot" text="forgot password" />
        </Box>
      </Card>
    </Container>
  )
}
