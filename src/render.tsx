import './main.css'

import { StrictMode } from 'react'
import { render } from 'react-dom'
import { Header } from './Header'

// The createRoot().render() API breaks the mobile hamburger navigation
render(
  <StrictMode>
    <Header showSubscribe={true} showThemeToggler={true}>
      <p>Hello, world!</p>
    </Header>
  </StrictMode>,
  document.getElementById('app')
)
