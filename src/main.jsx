import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import { PropiedadProvider } from './Propiedades/PropiedadProvider'
import { LoginProvider } from './auth/services/LoginProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <LoginProvider>
    <PropiedadProvider>
    <App />
    </PropiedadProvider>
    </LoginProvider>
    </BrowserRouter>
   
  </React.StrictMode>,
)
