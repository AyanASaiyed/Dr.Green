import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Analysis from './Analysis.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  {/* CHANGE THIS BACK TO APP AFTER */}
    <App/>
  </StrictMode>,
)
