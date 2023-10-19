import classNames from 'classnames'
import React from 'react'
import { NavDropdownColumnHeader } from './NavDropdownColumnHeader'
import { toFullUrl } from './utils'

import type { Link, NavDropdownColumnProps } from './types'

type Props = NavDropdownColumnProps

export const NavDropdownColumn = ({
  title,
  subtitle,
  groupHref,
  links,
  hoverBackground,
  image,
  hasHeader = false
}: Props): React.JSX.Element => {
  return (
    <li>
      {hasHeader ? (
        <NavDropdownColumnHeader
          title={title}
          groupHref={groupHref}
          subtitle={subtitle}
          hoverBackground={hoverBackground}
          image={image}
        />
      ) : (
        <h3 className="mb-10 font-bold text-lg">{title}</h3>
      )}
      <ul>
        {links.map(({ href, text }: Link) => (
          <li key={text}>
            <a
              href={toFullUrl(href)}
              className={classNames(
                'block',
                'my-4',
                'py-2',
                'hover:px-3',
                'rounded-lg',
                'font-medium',
                'hover:font-semibold',
                'text-slate-800',
                'hover:text-slate-500',
                'hover:bg-slate-50'
              )}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </li>
  )
}
