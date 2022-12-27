import React, { Suspense } from 'react'
import { ThemeProvider } from '@mui/material'
import { ToastContainer } from 'react-toastify'

import { useAppContext } from './contexts/AppProvider'
import { HamburgerMenu, Loader } from './components'
import { darkTheme, lightTheme } from './theme'
import Router from './Router'

const App:React.FC = () => {
  const { currentMode, isClicked } = useAppContext()

  return (
    <ThemeProvider theme={currentMode === 'dark' ? darkTheme : lightTheme}>
      <ToastContainer />
      <HamburgerMenu />
      <div style={{background: currentMode === 'dark' ? '#121212':'#FFF'}}>
        <Suspense fallback={<Loader />}>
          <Router />
        </Suspense>
      </div>

      {/* {isClicked.login && } */}
    </ThemeProvider>
  )
}

export default App