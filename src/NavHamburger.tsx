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
      className="list-none pt-3 pl-0"
      data-active-classes="bg-slate-50 dark:bg-slate-700"
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
                    'font-semibold',
                    'text-xl',
                    'text-left',
                    'text-slate-800',
                    'dark:text-slate-300'
                  )}
                >
                  {title}
                </h2>
              }
            >
              <ul className="pt-4 px-5">
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
