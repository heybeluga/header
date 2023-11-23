import React from 'react'
import { NavDropdownColumnHeader } from './NavDropdownColumnHeader'

import type { NavDropdownColumnProps } from './types'

type Props = NavDropdownColumnProps

export const NavDropdownColumn = ({
  title,
  subtitle,
  groupHref,
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
    </li>
  )
}
