export interface HeaderDropdown {
  title: string
  body: NavDropdownColumnProps[]
}

export interface Link {
  href: string
  text: string
}

export interface NavDropdownColumnProps {
  title: string
  subtitle?: string
  groupHref?: string
  links: Link[]
  hoverBackground?: string
  hasHeader?: boolean
  image?: React.JSX.Element
}
