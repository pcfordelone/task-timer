import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CycleProvider } from './contexts/CycleContext/CycleContextProvider'
import { CycleRoutes } from './Routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CycleProvider>
        <BrowserRouter>
          <CycleRoutes />
        </BrowserRouter>
      </CycleProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
