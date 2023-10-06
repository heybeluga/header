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
      <h2 className="text-xl font-semibold group-hover:text-slate-800">
        {title}
      </h2>
      <h3 className="text-sm font-light group-hover:text-slate-800">
        {subtitle}
      </h3>
    </div>
  )
}
