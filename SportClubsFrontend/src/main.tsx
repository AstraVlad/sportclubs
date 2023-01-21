import React from "react"

import {ThemeProvider} from "@mui/material/styles"
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"

import App from "./App"
import {store} from "./store"
import theme from "./styles/styles"


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
