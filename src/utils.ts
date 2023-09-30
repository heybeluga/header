export const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const appendTrailingSlash = (href: string): string =>
  href.endsWith('/') ? href : `${href}/`
