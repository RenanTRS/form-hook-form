import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import theme from './style/theme/themeForm'
import { Reset } from './style/Reset'
import { GlobalStyle } from './style/GlobalStyle'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
