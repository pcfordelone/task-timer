import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CycleProvider } from './contexts/CycleContext'
import { CycleRoutes } from './Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleProvider>
          <CycleRoutes />
        </CycleProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
