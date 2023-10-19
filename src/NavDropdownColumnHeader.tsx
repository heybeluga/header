import classNames from 'classnames'
import React from 'react'
import { NavDropdownColumnHeaderContent } from './NavDropdownColumnHeaderContent'

interface Props {
  title: string
  groupHref?: string | undefined
  subtitle?: string | undefined
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
            'py-4',
            'pl-4',
            'pr-10',
            'rounded-3xl',
            'border',
            'border-transparent',
            'tablet:border-slate-300',
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
            'border-transparent',
            'tablet:border-slate-300'
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
