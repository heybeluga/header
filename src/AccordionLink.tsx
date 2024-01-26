import classNames from 'classnames'
import React from 'react'

interface Props {
  id: string
  index: number
  headingClassNames: string[]
  titleChild: React.ReactNode
  rootLink: string
}

export const AccordionLink = ({
  id,
  index,
  headingClassNames,
  titleChild,
  rootLink
}: Props): React.JSX.Element => {
  return (
    <li className="p-0 tablet:p-0 m-0 tablet:m-0">
      <a
        id={`${id}-link-heading-${index}`}
        type="button"
        className={classNames('group', ...headingClassNames)}
        href={rootLink}
        target="_blank"
      >
        {titleChild}
      </a>
    </li>
  )
}
