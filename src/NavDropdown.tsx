import classNames from 'classnames'
import React from 'react'
import { Chevron } from './Chevron'
import { NavDropdownColumn } from './NavDropdownColumn'
import { capitalize } from './utils'

import { NavDropdownArticleLink } from './NavDropdownArticleLink'
import type { HeaderDropdown, Link, NavDropdownColumnProps } from './types'

export const NavDropdown = ({
  title,
  body,
  articleLinks
}: HeaderDropdown): React.JSX.Element => {
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
          'hover:bg-slate-100'
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
        <div className="flex rounded-xl border border-slate-200 bg-white">
          <ul
            className={classNames(
              'no-anchor',
              articleLinks.length > 0 ? 'flex flex-col' : 'grid grid-cols-4',
              'w-auto',
              'p-6',
              'gap-x-4',
              'gap-y-0',
              'tablet:gap-y-4'
            )}
          >
            {body.map((columnProps: NavDropdownColumnProps) => (
              <NavDropdownColumn key={columnProps.title} {...columnProps} />
            ))}
          </ul>
          {articleLinks.length > 0 && (
            <div className="flex flex-col gap-4 p-6 bg-slate-100 rounded-r-xl">
              <h3 className="text-lg font-bold">Popular Articles</h3>
              <ul className="flex flex-col gap-4">
                {articleLinks.map((link: Link) => (
                  <NavDropdownArticleLink key={link.href} {...link} />
                ))}
              </ul>
              <a
                className={classNames(
                  'font-medium',
                  'text-sm',
                  'text-center',
                  'text-blue-500'
                )}
                href="https://heybeluga.com/articles/"
              >
                View All Articles
              </a>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}
