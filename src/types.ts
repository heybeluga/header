export interface HeaderDropdown {
  title: string
  body: NavDropdownColumnProps[]
  bodyStyle: string
  articleLinks: Link[]
  moreLink: Link
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
  hoverBackground?: string
  hasHeader?: boolean
  image?: React.JSX.Element
}
