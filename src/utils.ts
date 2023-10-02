export const capitalize = (word: string): string =>
  word.charAt(0).toUpperCase() + word.slice(1)

export const appendTrailingSlash = (href: string): string =>
  href.endsWith('/') ? href : `${href}/`

export const MAIN_WRAPPER_WIDTH_CLASSES: string[] = [
  'px-4',
  'tablet:px-8',
  'desktop:px-20',
  'full:px-0',
  'full:mx-auto',
  'full:w-[1280px]'
]

export const mainDivClassNames: string[] = [
  'text-slate-800',
  'marker:text-slate-800',
  ...MAIN_WRAPPER_WIDTH_CLASSES
]
