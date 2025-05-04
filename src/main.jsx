import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { init } from '@emailjs/browser'
import './index.css'
import App from './App.jsx'

init("Z_J5n3HL0aueHiZLL");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)