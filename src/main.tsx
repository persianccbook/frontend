import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { OpenAPI } from './openapi/index.ts'

OpenAPI.BASE = "http://127.0.0.1:8000"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
