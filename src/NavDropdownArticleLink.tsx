import classNames from 'classnames'
import React from 'react'
import { type Link } from './types'

export const NavDropdownArticleLink = ({
  href,
  text,
  imageUrl
}: Link): React.JSX.Element => {
  return (
    <li>
      <a
        className={classNames(
          'static-link',
          'group',
          'flex',
          'items-center',
          'gap-4',
          'p-4',
          'rounded-3xl',
          'border',
          'border-transparent',
          'desktop:border-slate-300',
          'text-slate-800',
          'hover:text-slate-500',
          'hover:bg-slate-50',
          'bg-white',
          'dark:desktop:border-slate-800',
          'dark:text-slate-200',
          'dark:hover:text-white',
          'dark:bg-slate-600',
          'dark:hover:bg-slate-500'
        )}
        href={href}
      >
        <div
          className={classNames(
            'w-16',
            'h-16',
            'flex',
            'object-cover',
            'overflow-hidden',
            'rounded-xl'
          )}
        >
          <img src={imageUrl} />
        </div>
        <h2 className="max-w-sm font-semibold">{text}</h2>
      </a>
    </li>
  )
}
