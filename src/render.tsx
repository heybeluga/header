import './main.css'
import { StrictMode } from 'react'
import { Header } from './Header'
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app') as HTMLElement)

root.render(
  <StrictMode>
    <Header showSubscribe={true} showThemeToggler={true}>
      <p>Hello, world!</p>
    </Header>
  </StrictMode>
)
