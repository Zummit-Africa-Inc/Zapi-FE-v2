import React, { Suspense } from 'react'
import { ThemeProvider } from '@mui/material'

import { useAppContext } from './contexts/AppProvider'
import { darkTheme, lightTheme } from './theme'
import { Loader } from './components'
import Router from './Router'

const App:React.FC = () => {
  const { currentMode } = useAppContext()
  
  return (
    <ThemeProvider theme={currentMode === 'dark' ? darkTheme : lightTheme}>
      <div style={{background: currentMode === 'dark' ? '#121212':'#FFF'}}>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </div>
    </ThemeProvider>
  )
}

export default App