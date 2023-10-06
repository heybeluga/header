import React from 'react'
import { AccordionDropdown } from './AccordionDropdown'
import { NavDropdownColumnHeader } from './NavDropdownColumnHeader'
import { HEADER_DROPDOWNS } from './header-content'

import type { HeaderDropdown, NavDropdownColumnProps } from './types'

export const NavHamburger = (): React.JSX.Element => {
  return (
    <ul
      id="nav-hamburger-accordion"
      data-accordion="collapse"
      class="list-none pl-0"
      data-active-classes="bg-none"
      data-inactive-classes="bg-none"
    >
      {HEADER_DROPDOWNS.map(
        ({ title, body }: HeaderDropdown, index: number) => {
          return (
            <AccordionDropdown
              id="nav-hamburger"
              index={index}
              headingClassNames={[
                'flex',
                'items-center',
                'justify-between',
                'w-full',
                'p-5',
                'uppercase'
              ]}
            >
              <h2 slot="title" class="font-medium text-left">
                {title}
              </h2>
              <ul>
                {body.map((props: NavDropdownColumnProps) => (
                  <li>
                    <NavDropdownColumnHeader {...props} />
                  </li>
                ))}
              </ul>
            </AccordionDropdown>
          )
        }
      )}
    </ul>
  )
}
