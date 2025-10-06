import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Render React app and replace the entire content
const rootElement = document.getElementById('react-root')
if (rootElement) {
  // Clear the existing content
  rootElement.innerHTML = ''
  
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
