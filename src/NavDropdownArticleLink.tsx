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
          'group',
          'flex',
          'items-center',
          'gap-4',
          'p-4',
          'rounded-3xl',
          'border',
          'border-transparent',
          'tablet:border-slate-300',
          'text-slate-800',
          'hover:text-slate-500',
          'bg-white',
          'hover:bg-slate-50'
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
            'bg-slate-100',
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
