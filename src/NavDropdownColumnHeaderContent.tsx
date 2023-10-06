import React from 'react'

interface Props {
  title: string
  subtitle: string
}

export const NavDropdownColumnHeaderContent = ({
  title,
  subtitle
}: Props): React.JSX.Element => {
  return (
    <div>
      <h2 class="text-xl font-semibold group-hover:text-slate-800">{title}</h2>
      <h3 class="text-sm font-light group-hover:text-slate-800">{subtitle}</h3>
    </div>
  )
}
