import classNames from 'classnames'
import React from 'react'
import { Chevron } from './Chevron'
import { NavDropdownColumn } from './NavDropdownColumn'
import { capitalize } from './utils'

import { ButtonLink } from './ButtonLink'
import { NavDropdownArticleLink } from './NavDropdownArticleLink'
import type { HeaderMenuItem, Link, NavDropdownColumnProps } from './types'

export const NavDropdown = ({
  title,
  body,
  bodyStyle,
  articleLinks,
  moreLink
}: HeaderMenuItem): React.JSX.Element => {
  return (
    <li className="w-full">
      <button
        id={`dropdown-button-${title}`}
        className={classNames(
          'flex',
          'items-center',
          'justify-between',
          'w-full',
          'desktop:w-auto',
          'rounded-2xl',
          'py-2',
          'pl-3',
          'pr-4',
          'font-bold',
          'text-base/3', // Fonts have extra bottom space for descenders, which we ignore for uppercase headings
          'uppercase',
          'transition-transform',
          'ease-in-out',
          'duration-300',
          'hover:text-blue-700',
          'hover:bg-slate-100',
          'dark:text-slate-200',
          'dark:hover:text-white',
          'dark:hover:bg-slate-700'
        )}
      >
        <div
          id={`dropdown-caret-${title}`}
          className="mr-1 transition-transform ease-in-out duration-300"
        >
          <Chevron transform="rotate(90)" />
        </div>
        {capitalize(title)}
      </button>
      <div id={`dropdown-${title}`} className="z-10 hidden overflow-hidden">
        <div
          className={classNames(
            'flex',
            'rounded-xl',
            'border',
            'border-slate-200',
            'dark:border-slate-800',
            'bg-white',
            'dark:bg-slate-700',
            { 'flex-col': articleLinks.length === 0 }
          )}
        >
          <ul
            className={classNames(
              'no-anchor',
              bodyStyle,
              'w-auto',
              'p-6',
              'gap-x-4',
              'gap-y-0',
              'desktop:gap-y-4'
            )}
          >
            {body.map((columnProps: NavDropdownColumnProps) => (
              <NavDropdownColumn key={columnProps.title} {...columnProps} />
            ))}
          </ul>
          {articleLinks.length === 0 ? (
            <div className="px-6 pb-6">
              <ButtonLink
                href={moreLink.href}
                text={moreLink.text}
                background="bg-slate-100"
                darkBackground="dark:bg-slate-800"
                darkFocusBackground="dark:hover:bg-slate-600"
                darkHoverBackground="dark:hover:bg-slate-600"
                darkTextColour="dark:!text-white"
                focusBackground="focus:bg-slate-200"
                hoverBackground="hover:bg-slate-200"
                textColour="!text-black"
              />
            </div>
          ) : (
            <div
              className={classNames(
                'flex',
                'flex-col',
                'gap-4',
                'p-6',
                'rounded-r-xl',
                'bg-slate-100',
                'dark:bg-slate-800'
              )}
            >
              <h3 className="text-lg font-bold dark:text-white">
                Popular Articles
              </h3>
              <ul className="flex flex-col gap-4">
                {articleLinks.map((link: Link) => (
                  <NavDropdownArticleLink key={link.href} {...link} />
                ))}
              </ul>
              <a
                className={classNames(
                  'static-link',
                  'font-medium',
                  'text-sm',
                  'text-center',
                  'text-blue-500'
                )}
                href={moreLink.href}
              >
                {moreLink.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
