import classNames from 'classnames'
import React from 'react'
import { capitalize } from './utils'

import type { HeaderMenuItem } from './types'

export const NavMenuLink = ({
  title,
  rootLink
}: HeaderMenuItem): React.JSX.Element => {
  return (
    <li className="w-full">
      <a
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
          '!text-black',
          'uppercase',
          'transition-transform',
          'ease-in-out',
          'duration-300',
          'leading-[22px]',
          'text-center',
          'hover:!text-blue-700',
          'hover:!bg-slate-100',
          'dark:!text-slate-200',
          'dark:hover:!text-white',
          'dark:hover:!bg-slate-700'
        )}
        href={rootLink}
        target="_blank"
      >
        {capitalize(title)}
      </a>
    </li>
  )
}
