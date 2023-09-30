import { Chevron } from './Chevron'
import { Logo } from './Logo'

import type { FunctionalComponent } from 'preact'

export const Header: FunctionalComponent<Record<string, null>> = () => {
  return (
    <div>
      <Logo />
      <Chevron />
      <h1>Header</h1>
    </div>
  )
}
