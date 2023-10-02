import classNames from 'classnames'
import { NavDropdownColumnHeaderContent } from './NavDropdownColumnHeaderContent'

import type { FunctionComponent } from 'preact'

interface Props {
  title: string
  href?: string | undefined
  subtitle: string
  hoverBackground?: string | undefined
}

export const NavDropdownColumnHeader: FunctionComponent<Props> = ({
  title,
  href,
  subtitle,
  hoverBackground
}: Props) => {
  return (
    <>
      {href != null ? (
        <a
          class={classNames(
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
          class={classNames(
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
