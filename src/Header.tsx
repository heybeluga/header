import classNames from 'classnames'
import React, { useEffect } from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'
import { NavDropdown } from './NavDropdown'
import { NavHamburger } from './NavHamburger'
import { HEADER_DROPDOWNS } from './header-content'
import { mainDivClassNames } from './utils'

import type { HeaderDropdown } from './types'

export const Header = (): React.JSX.Element => {
  useEffect(() => {
    HEADER_DROPDOWNS.forEach(({ title }: { title: string }) => {
      const targetElement: HTMLElement | null = document.getElementById(
        `dropdown-${title}`
      )
      const triggerElement: HTMLElement | null = document.getElementById(
        `dropdown-button-${title}`
      )
      if (targetElement == null || triggerElement == null) {
        return
      }

      const caret: Element | null = document.getElementById(
        `dropdown-caret-${title}`
      )

      /*
      if (caret == null) {
        return
      }

      // eslint-disable-next-line no-new
      new Dropdown(targetElement, triggerElement, {
        offsetDistance: 7,
        triggerType: 'hover',
        delay: 200,
        onHide: () => {
          caret.classList.remove('rotate-180')
        },
        onShow: () => {
          caret.classList.add('rotate-180')
        }
      })
      */
    })
  }, [])

  return (
    <header className="not-prose bg-white">
      <nav
        className={classNames(
          ...mainDivClassNames,
          'flex',
          'justify-between',
          'items-center',
          'py-4'
        )}
      >
        <div
          className={classNames(
            'w-full',
            'flex',
            'flex-wrap',
            'items-center',
            'justify-between'
          )}
        >
          <Logo />
          <div className="flex justify-between items-center">
            <div className="flex desktop:order-2 ml-6">
              <div className="hidden tablet:block">
                <ButtonLink
                  href="https://beluga.beehiiv.com/subscribe"
                  text="Subscribe"
                />
              </div>
              <button
                data-collapse-toggle="nav-hamburger"
                type="button"
                className={classNames(
                  'inline-flex',
                  'items-center',
                  'p-2',
                  'ml-3',
                  'text-sm',
                  'text-slate-500',
                  'rounded-lg',
                  'desktop:hidden',
                  'hover:bg-slate-100'
                )}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={classNames(
                'hidden',
                'w-full',
                'desktop:flex',
                'items-center',
                'justify-between',
                'desktop:w-auto',
                'desktop:order-1'
              )}
            >
              <ul className="flex items-center">
                {HEADER_DROPDOWNS.map(({ title, body }: HeaderDropdown) => (
                  <NavDropdown label={title} columns={body} />
                ))}
              </ul>
            </div>
          </div>
          <div id="nav-hamburger" className="hidden w-full desktop:hidden">
            <NavHamburger />
          </div>
        </div>
      </nav>
    </header>
  )
}
