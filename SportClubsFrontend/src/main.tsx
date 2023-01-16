import React from "react"

import {ThemeProvider} from "@mui/material/styles"
import ReactDOM from "react-dom/client"
import {BrowserRouter} from "react-router-dom"

import App from "./App"
import theme from "./styles/styles"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
