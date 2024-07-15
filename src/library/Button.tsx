import React, { CSSProperties } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Button.scss'

export const Button = ({
  text,
  preIcon,
  postIcon,
  onClick,
  style,
  type,
  disabled,
}: {
  text: string
  preIcon?: IconProp
  postIcon?: IconProp
  onClick?: () => void
  style?: CSSProperties
  type?: 'submit'
  disabled?: boolean
}) => {
  return (
    <button
      className="button"
      type={type}
      onClick={() => !disabled && onClick?.()}
      style={style}
      disabled={disabled}
    >
      {preIcon && <FontAwesomeIcon icon={preIcon} style={{ marginRight: 8 }} />}
      {text}
      {postIcon && (
        <FontAwesomeIcon icon={postIcon} style={{ marginLeft: 8 }} />
      )}
    </button>
  )
}
