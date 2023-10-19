export interface HeaderDropdown {
  title: string
  body: NavDropdownColumnProps[]
  articleLinks: Link[]
}

export interface Link {
  href: string
  text: string
  imageUrl?: string
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
