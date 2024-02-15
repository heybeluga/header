import classNames from 'classnames'
import { Dropdown } from 'flowbite'
import React, { useCallback, useEffect, useState } from 'react'
import { ButtonLink } from './ButtonLink'
import { Logo } from './Logo'
import { NavDropdown } from './NavDropdown'
import { NavHamburger } from './NavHamburger'
import { NavMenuLink } from './NavMenuLink'
import TbMoon from './assets/TbMoon'
import TbSun from './assets/TbSun'
import { HEADER_MENU_ITEMS } from './header-content'
import { mainDivClassNames } from './utils'

import type { HeaderMenuItem } from './types'

interface Props {
  forceLightTheme?: boolean
  showSubscribe?: boolean
  showThemeToggler?: boolean
  children?: React.ReactNode
}

export const Header = ({
  forceLightTheme = false,
  showSubscribe = true,
  showThemeToggler = false,
  children
}: Props): React.JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
  const [isUpdateBlocked, setIsUpdateBlocked] = useState<boolean>(true)

  const toggleTheme = useCallback(() => {
    setIsDarkTheme((dark: boolean) => {
      if (dark) {
        localStorage.setItem('theme_flag', 'light')
        return false
      } else {
        localStorage.setItem('theme_flag', 'dark')
        return true
      }
    })
  }, [])

  useEffect(() => {
    if (forceLightTheme) {
      setIsDarkTheme(false)
      return
    }

    const cachedTheme = localStorage?.getItem('theme_flag')
    if (cachedTheme === 'dark') {
      setIsDarkTheme(true)
    } else if (cachedTheme === 'light') {
      setIsDarkTheme(false)
    } else if (typeof window !== 'undefined') {
      const mediaQueryList: MediaQueryList = window.matchMedia(
        '(prefers-color-scheme: dark)'
      )
      const handleMediaChange = (e: MediaQueryListEvent): void => {
        if (localStorage?.getItem('theme_flag') == null) {
          setIsDarkTheme(e.matches)
        }
      }
      mediaQueryList.addEventListener('change', handleMediaChange)
      setIsDarkTheme(mediaQueryList.matches)
      setIsUpdateBlocked(false)
      return () => {
        mediaQueryList.removeEventListener('change', handleMediaChange)
      }
    } else {
      setIsDarkTheme(false)
    }
    setIsUpdateBlocked(false)
  }, [])

  useEffect(() => {
    if (document != null) {
      if (isUpdateBlocked) return
      if (isDarkTheme) {
        document.body.classList.add('theme-dark')
        document.body.classList.add('dark')
        document.body.classList.remove('theme-light')
      } else {
        document.body.classList.remove('theme-dark')
        document.body.classList.remove('dark')
        document.body.classList.add('theme-light')
      }
    }
  }, [isDarkTheme, isUpdateBlocked])

  useEffect(() => {
    HEADER_MENU_ITEMS.forEach(({ title }: { title: string }) => {
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
        offsetDistance: 23,
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
    <header className={classNames('not-prose bg-white', { dark: isDarkTheme })}>
      <nav
        className={classNames(
          'flex',
          'flex-wrap',
          'items-center',
          'justify-between',
          'py-3',
          'dark:bg-slate-800'
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
          <Logo fill={isDarkTheme ? 'white' : 'black'} />
          <div className="flex gap-4 justify-between items-center">
            <div className="flex desktop:order-3">
              {showSubscribe && (
                <div className="hidden tablet:block ml-2">
                  <ButtonLink
                    href="https://beluga.beehiiv.com/subscribe"
                    text="Subscribe"
                  />
                </div>
              )}
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
                  'hover:bg-slate-100',
                  'dark:text-slate-400',
                  'dark:hover:bg-slate-600',
                  'dark:hover:text-blue-500'
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
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
              <ul className="flex items-center gap-4">
                {HEADER_MENU_ITEMS.map((headerDropdown: HeaderMenuItem) =>
                  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                  headerDropdown.isDropdown ? (
                    <NavDropdown
                      key={headerDropdown.title}
                      {...headerDropdown}
                    />
                  ) : (
                    <NavMenuLink
                      key={headerDropdown.title}
                      {...headerDropdown}
                    />
                  )
                )}
              </ul>
            </div>
            {showThemeToggler && (
              <div className="hidden desktop:block desktop:order-2">
                <button
                  className={classNames(
                    'mr-4',
                    'p-2',
                    'rounded-full',
                    'bg-[#f3f4f6]',
                    'hover:bg-[#e5e7eb]',
                    'dark:bg-[#374151]',
                    'dark:hover:bg-[#4b5563]',
                    'dark:text-white'
                  )}
                  onClick={toggleTheme}
                >
                  {isDarkTheme ? (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <TbSun />
                  ) : (
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    <TbMoon />
                  )}
                </button>
              </div>
            )}
            {children != null && (
              <div className="hidden desktop:block desktop:order-2 dark:text-white">
                {children}
              </div>
            )}
          </div>
        </div>
        <div id="nav-hamburger" className="hidden w-full desktop:hidden">
          <NavHamburger />
        </div>
      </nav>
    </header>
  )
}
