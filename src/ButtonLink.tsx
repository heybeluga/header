import classNames from 'classnames'
import { toFullUrl } from './utils'

import type { FunctionalComponent } from 'preact'
import type { Link } from './types'

const buttonClassNames: string[] = [
  'flex',
  'justify-center',
  'not-prose',
  'font-heading',
  'font-semibold',
  'whitespace-nowrap',
  'transition',
  'ease-in-out',
  'delay-50',
  'duration-300',
  'hover:-translate-y-1',
  'focus:-translate-y-1'
]

interface Props extends Link {
  background?: string
  focusBackground?: string
  fontSize?: string
  hoverBackground?: string
  padding?: string
  rounded?: string
  targetBlank?: boolean
  textColour?: string
  verticalPadding?: string
}

export const ButtonLink: FunctionalComponent<Props> = ({
  href,
  text,
  background = 'bg-slate-800',
  focusBackground = 'focus:bg-slate-600',
  fontSize = 'text-base',
  hoverBackground = 'hover:bg-slate-600',
  padding = 'px-12',
  rounded = 'rounded-3xl',
  targetBlank = false,
  textColour = '!text-white',
  verticalPadding = 'py-3'
}) => {
  return (
    <a
      href={toFullUrl(href)}
      rel="prefetch"
      target={targetBlank ? '_blank' : '_self'}
      class={classNames(
        'not-prose',
        ...buttonClassNames,
        background,
        focusBackground,
        fontSize,
        hoverBackground,
        padding,
        rounded,
        textColour,
        verticalPadding
      )}
    >
      {text}
    </a>
  )
}
