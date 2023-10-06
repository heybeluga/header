import React from 'react'

interface Props {
  transform?: string
}

export const Chevron = ({ transform = '' }: Props): React.JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-chevron-right"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      stroke-width="2.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      transform={transform}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 6l6 6l-6 6" />
    </svg>
  )
}
