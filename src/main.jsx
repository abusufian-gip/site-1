import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './Components/navigation.css'
import './Components/Hero.css'
import './Components/Card.css'
import './Components/loginpart.css'
import './Components/Input.css'
import './Components/Delevery.css'
import './Components/Contact.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
