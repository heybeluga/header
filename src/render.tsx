import './main.css'

import { render } from 'react-dom'
import { Header } from './Header'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(
  <Header showSubscribe={true} showThemeToggler={true}>
    <p>Hello, world!</p>
  </Header>,
  document.getElementById('app')
)
