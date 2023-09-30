import type { FunctionalComponent } from 'preact'
import { Logo } from './Logo'

export const Header: FunctionalComponent<Record<string, null>> = () => {
  return (
    <div>
      <Logo />
      <h1>Header</h1>
    </div>
  )
}
