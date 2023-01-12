import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './styles/styles'
import { BrowserRouter} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
        <BrowserRouter>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
        </BrowserRouter>
  </React.StrictMode>,
)
