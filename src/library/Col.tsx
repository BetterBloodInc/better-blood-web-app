import React, { CSSProperties } from 'react'
import './Col.scss'
import { ALIGN_MAP, JUSTIFY_MAP } from './Row'

export const Col = ({
  id,
  children,
  style,
  className,
  gap,

  justify,
  align,
}: {
  id?: string
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  gap?: CSSProperties['gap']
  justify?: 'start' | 'end' | 'between'
  align?: 'start' | 'end' | 'center'
}) => {
  return (
    <div
      id={id}
      style={{
        gap,
        justifyContent: justify ? JUSTIFY_MAP[justify] : undefined,
        alignItems: align ? ALIGN_MAP[align] : undefined,
        ...style,
      }}
      className={`Col ${className ?? ''}`}
    >
      {children}
    </div>
  )
}
