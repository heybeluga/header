import './main.css'

import { render } from 'preact'
import { Header } from './index'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
render(<Header />, document.getElementById('app')!)
