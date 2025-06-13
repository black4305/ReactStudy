import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// 1. JSX의 특징
// import App from './App.jsx'
import App from './AppExample.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
