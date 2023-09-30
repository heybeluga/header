import { Chevron } from './Chevron'
import { Logo } from './Logo'
import { NavDropdown } from './NavDropdown'
import { HEADER_DROPDOWNS } from './header-content'

import type { FunctionalComponent } from 'preact'
import type { HeaderDropdown } from './types'

export const Header: FunctionalComponent<Record<string, null>> = () => {
  return (
    <div>
      <Logo />
      <Chevron />
      {HEADER_DROPDOWNS.map(({ title, body }: HeaderDropdown) => (
        <NavDropdown label={title} columns={body} />
      ))}
      <h1>Header</h1>
    </div>
  )
}
