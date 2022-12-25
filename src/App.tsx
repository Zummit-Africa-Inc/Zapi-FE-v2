import React, { Suspense } from 'react'
import { ThemeProvider } from '@mui/material'

import { useAppContext } from './contexts/AppProvider'
import { darkTheme, lightTheme } from './theme'
import { Loader } from './components'
import Router from './Router'

const App:React.FC = () => {
  const { mode } = useAppContext()
  return (
    <ThemeProvider theme={mode === 'dark' ? darkTheme : lightTheme}>
      <div>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App