import classNames from 'classnames'
import React from 'react'

interface Props {
  title: string
  subtitle?: string | undefined
  image?: React.JSX.Element | undefined
}

export const NavDropdownColumnHeaderContent = ({
  title,
  subtitle,
  image
}: Props): React.JSX.Element => {
  return (
    <>
      {image != null && (
        <div
          className={classNames(
            'w-16',
            'h-16',
            'flex',
            'items-center',
            'justify-center',
            'bg-slate-100',
            'rounded-xl'
          )}
        >
          {image}
        </div>
      )}
      <div>
        <h2 className="text-xl font-semibold">
          {title}
        </h2>
        {subtitle != null && (
          <h3 className="text-sm font-light">
            {subtitle}
          </h3>
        )}
      </div>
    </>
  )
}
