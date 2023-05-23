import React from 'react'
import ReactDOM from 'react-dom/client'

//Estilo Global
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyle from './styles/global'

//Pages
import{Routes} from "./routes"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
    <Routes/>
    </ThemeProvider>
  </React.StrictMode>,
)
