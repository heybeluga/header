import classNames from 'classnames'
import { appendTrailingSlash } from './utils'

import type { FunctionComponent } from 'preact'
import type { Link, NavDropdownColumnProps } from './types'

type Props = NavDropdownColumnProps

export const NavDropdownColumn: FunctionComponent<Props> = ({
  title,
  links
}: Props) => {
  return (
    <li>
      <h3 class="mb-10 font-bold text-lg">{title}</h3>
      <ul>
        {links.map(({ href, text }: Link) => (
          <li>
            <a
              href={appendTrailingSlash(href)}
              class={classNames(
                'static-link',
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
