import React, { CSSProperties } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './IconButton.scss'

export const IconButton = ({
  id,
  tooltip,
  icon,
  onClick,
  style,
  isLoading,
}: {
  id?: string
  tooltip: string
  icon: IconProp
  onClick: () => void
  style?: CSSProperties
  isLoading?: boolean
}) => {
  return (
    <button
      id={id}
      className="icon-button"
      onClick={() => onClick()}
      style={style}
      title={tooltip}
    >
      <FontAwesomeIcon icon={icon} className={isLoading ? 'fa-spin' : ''} />
    </button>
  )
}
