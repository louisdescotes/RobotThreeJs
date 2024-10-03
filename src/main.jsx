import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Scene from './Scene.jsx'
import './index.css'
import Menu from './Menu.jsx'
import Landing from './pages/Landing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Landing />
    <Scene />
  </StrictMode>,
)
