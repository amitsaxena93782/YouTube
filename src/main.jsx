import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme.js'
import Home from './Home/Home.jsx'
// import './index.css'

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>,
)
