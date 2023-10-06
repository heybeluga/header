import classNames from 'classnames'
import React from 'react'
import { NavDropdownColumnHeaderContent } from './NavDropdownColumnHeaderContent'

interface Props {
  title: string
  href?: string | undefined
  subtitle: string
  hoverBackground?: string | undefined
}

export const NavDropdownColumnHeader = ({
  title,
  href,
  subtitle,
  hoverBackground
}: Props): React.JSX.Element => {
  return (
    <>
      {href != null ? (
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
            'border-2',
            'border-transparent',
            'text-slate-800',
            'hover:text-slate-500',
            hoverBackground
          )}
          href={href}
        >
          <NavDropdownColumnHeaderContent title={title} subtitle={subtitle} />
        </a>
      ) : (
        <div
          className={classNames(
            'flex',
            'items-center',
            'gap-4',
            'p-4',
            'border',
            'border-transparent'
          )}
        >
          <NavDropdownColumnHeaderContent title={title} subtitle={subtitle} />
        </div>
      )}
    </>
  )
}
