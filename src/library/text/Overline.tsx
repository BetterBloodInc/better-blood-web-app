import React, { CSSProperties } from 'react'
import './Overline.scss'

export const Overline = ({
  children,
  style,
}: {
  children: string | React.ReactNode | undefined
  style?: CSSProperties
}) => {
  if (!children) return null
  return (
    <span
      className="overline"
      style={{
        ...style,
      }}
    >
      {children}
    </span>
  )
}
