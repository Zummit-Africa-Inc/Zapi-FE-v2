import './init'
import React from 'react'
import { Amplify } from 'aws-amplify'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

import { AppProvider } from './contexts/AppProvider'
import { endpoints } from './libs/aws-config'
import { store } from './store/store'
import App from './App'
import './index.css'

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID as string
const helmetContext = {}

Amplify.configure({ API: endpoints })

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <GoogleOAuthProvider clientId={clientId}>
          <HelmetProvider context={helmetContext}>
            <AppProvider>
              <App />
            </AppProvider>
          </HelmetProvider>
        </GoogleOAuthProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)