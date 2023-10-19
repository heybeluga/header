import classNames from 'classnames'
import { Dropdown } from 'flowbite'
import React, { useEffect, useState } from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'
import { NavDropdown } from './NavDropdown'
import { NavHamburger } from './NavHamburger'
import { HEADER_DROPDOWNS } from './header-content'
import { mainDivClassNames } from './utils'

import type { HeaderDropdown } from './types'

export const Header = (): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

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
    })
  }, [])

  return (
    <header className="not-prose bg-white">
      <nav
        className={classNames(
          'flex',
          'flex-wrap',
          'items-center',
          'justify-between',
          'py-4'
        )}
      >
        <div
          className={classNames(
            ...mainDivClassNames,
            'w-full',
            'flex',
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
                onClick={() => {
                  setIsOpen(!isOpen)
                }}
                className={classNames(
                  'inline-flex',
                  'items-center',
                  'p-2',
                  'ml-3',
                  'text-sm',
                  'text-slate-500',
                  'hover:text-blue-500',
                  'rounded-lg',
                  'desktop:hidden',
                  'hover:bg-slate-100'
                )}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-x"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-menu-2"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6l16 0"></path>
                    <path d="M4 12l16 0"></path>
                    <path d="M4 18l16 0"></path>
                  </svg>
                )}
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
                  <NavDropdown key={title} label={title} columns={body} />
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div id="nav-hamburger" className="hidden w-full desktop:hidden">
          <NavHamburger />
        </div>
      </nav>
    </header>
  )
}
