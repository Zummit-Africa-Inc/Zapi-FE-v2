import React, { Suspense } from 'react'
import { ThemeProvider } from '@mui/material'

import { useAppContext } from './contexts/AppProvider'
import { darkTheme, lightTheme } from './theme'
import { Backdrop, HamburgerMenu, Loader } from './components'
import Router from './Router'

const App:React.FC = () => {
  const { currentMode, isClicked, activeMenu, setActiveMenu, screenSize } = useAppContext()

  return (
    <ThemeProvider theme={currentMode === 'dark' ? darkTheme : lightTheme}>
      {(activeMenu && screenSize < 1260) && (
        <Backdrop onClose={() => setActiveMenu(false)}>
          <HamburgerMenu />
        </Backdrop>
      )}
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