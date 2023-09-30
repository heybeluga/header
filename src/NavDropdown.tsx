import classNames from 'classnames'
import { Chevron } from './Chevron'
import { capitalize } from './utils'

import type { FunctionComponent } from 'preact'
import type { NavDropdownColumnProps } from './types'

interface Props {
  label: string
  columns: NavDropdownColumnProps[]
}

export const NavDropdown: FunctionComponent<Props> = ({
  label,
  columns
}: Props) => {
  return (
    <li class="w-full">
      <button
        id={`dropdown-button-${label}`}
        class={classNames(
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
          'uppercase',
          'transition-transform',
          'ease-in-out',
          'duration-300',
          'hover:text-blue-700',
          'hover:bg-slate-100'
        )}
      >
        <div
          id={`dropdown-caret-${label}`}
          class="mr-1 transition-transform ease-in-out duration-300"
        >
          <Chevron transform="rotate(90)" />
        </div>
        {capitalize(label)}
      </button>
      <ul
        id={`dropdown-${label}`}
        class={classNames(
          'no-anchor',
          'z-10',
          'hidden',
          'grid',
          'w-auto',
          'p-10',
          'gap-x-28',
          'rounded-xl',
          'bg-white',
          'border',
          'border-slate-200',
          { 'grid-cols-2': columns.length === 2 },
          { 'grid-cols-3': columns.length === 3 },
          { 'grid-cols-4': columns.length === 4 }
        )}
      >
        {columns.map((columnProps: NavDropdownColumnProps) => (
          <p>{columnProps.title}</p>
        ))}
      </ul>
    </li>
  )
}
