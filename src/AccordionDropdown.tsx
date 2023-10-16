import classNames from 'classnames'
import React from 'react'

interface Props {
  children: React.ReactNode
  id: string
  index: number
  headingClassNames: string[]
  expanded?: boolean
  titleChild: React.ReactNode
}

export const AccordionDropdown = ({
  children,
  id,
  index,
  headingClassNames,
  expanded,
  titleChild
}: Props): React.JSX.Element => {
  return (
    <li className="p-0 tablet:p-0 m-0 tablet:m-0">
      <button
        id={`${id}-accordion-heading-${index}`}
        type="button"
        className={classNames('group', ...headingClassNames)}
        data-accordion-target={`#${id}-accordion-body-${index}`}
        aria-expanded={expanded}
      >
        {titleChild}
        <svg
          data-accordion-icon
          className={classNames(
            'w-6',
            'h-6',
            'mx-3',
            'shrink-0',
            'transition-transform',
            'ease-in-out',
            'duration-300',
            'group-hover:fill-blue-500'
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      <div id={`${id}-accordion-body-${index}`} className="hidden">
        {children}
      </div>
    </li>
  )
}
