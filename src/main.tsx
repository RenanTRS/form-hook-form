import React from 'react'
import ReactDOM from 'react-dom'
import { Reset } from './style/Reset'
import { GlobalStyle } from './style/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import theme from './style/theme'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
