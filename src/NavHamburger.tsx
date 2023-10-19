import React from 'react'
import { AccordionDropdown } from './AccordionDropdown'
import { NavDropdownColumnHeader } from './NavDropdownColumnHeader'
import { HEADER_DROPDOWNS } from './header-content'

import classNames from 'classnames'
import type { HeaderDropdown, NavDropdownColumnProps } from './types'

export const NavHamburger = (): React.JSX.Element => {
  return (
    <ul
      id="nav-hamburger-accordion"
      data-accordion="collapse"
      className="list-none pl-0"
      data-active-classes="bg-slate-50 text-blue-500"
      data-inactive-classes="bg-none"
    >
      {HEADER_DROPDOWNS.map(
        ({ title, body }: HeaderDropdown, index: number) => {
          return (
            <AccordionDropdown
              id="nav-hamburger"
              key={title}
              index={index}
              headingClassNames={[
                'flex',
                'items-center',
                'justify-between',
                'w-full',
                'pl-8',
                'pr-4',
                'py-5',
                'uppercase'
              ]}
              titleChild={
                <h2
                  className={classNames(
                    'font-heading',
                    'font-medium',
                    'text-xl',
                    'text-left',
                    '!text-slate-800'
                  )}
                >
                  {title}
                </h2>
              }
            >
              <ul>
                {body.map((props: NavDropdownColumnProps) => (
                  <li key={props.title}>
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
