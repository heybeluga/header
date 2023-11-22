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
            'static-link',
            'group',
            'flex',
            'items-center',
            'gap-4',
            'p-4',
            'rounded-3xl',
            'border',
            'border-transparent',
            'bg-transparent',
            'desktop:border-slate-300',
            'text-slate-800',
            'hover:text-slate-500',
            'dark:desktop:border-slate-800',
            'dark:text-slate-200',
            'dark:hover:text-white',
            'dark:hover:bg-slate-500',
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
            'desktop:border-slate-300',
            'dark:desktop:border-slate-800'
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
