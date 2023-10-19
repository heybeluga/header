import classNames from 'classnames'
import React from 'react'
import { NavDropdownColumnHeaderContent } from './NavDropdownColumnHeaderContent'

interface Props {
  title: string
  groupHref?: string | undefined
  subtitle: string
  hoverBackground?: string | undefined
  image?: React.JSX.Element | undefined
}

export const NavDropdownColumnHeader = ({
  title,
  groupHref,
  subtitle,
  hoverBackground,
  image
}: Props): React.JSX.Element => {
  return (
    <>
      {groupHref != null ? (
        <a
          className={classNames(
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
          href={groupHref}
        >
          <NavDropdownColumnHeaderContent
            title={title}
            subtitle={subtitle}
            image={image}
          />
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
          <NavDropdownColumnHeaderContent
            title={title}
            subtitle={subtitle}
            image={image}
          />
        </div>
      )}
    </>
  )
}
