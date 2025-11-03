import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Apply dark theme by default
const rootElement = document.documentElement;
rootElement.classList.add('dark');

// Optional: You can also add a theme toggle later
// This is just to ensure the dark theme is applied by default
if (!rootElement.classList.contains('dark')) {
  rootElement.classList.add('dark');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
