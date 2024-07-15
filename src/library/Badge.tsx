import React, { CSSProperties } from 'react'
import './Badge.scss'
export const Badge = ({
  text,
  style,
  color,
  dark,
}: {
  text: string
  style?: CSSProperties
  color?: 'green' | 'red' | 'blue' | 'yellow'
  dark?: boolean
}) => {
  return (
    <div className={`badge ${dark ? 'dark' : ''} ${color}`} style={style}>
      <span>{text}</span>
    </div>
  )
}
