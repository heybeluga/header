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
  subtitle: string
  groupHref?: string
  links: Link[]
  svgName: string
  iconBackground?: string
  hoverBackground?: string
  hasHeader?: boolean
}
