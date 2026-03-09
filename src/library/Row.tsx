import React, { CSSProperties } from 'react'
import './Row.scss'

export const JUSTIFY_MAP = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  between: 'space-between',
}

export const ALIGN_MAP = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
}

export const Row = ({
  children,
  style,
  className,
  gap,
  fullWidth,
  onClick,
  justify,
  align,
}: {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  gap?: CSSProperties['gap']
  fullWidth?: boolean
  onClick?: () => void
  justify?: 'start' | 'end' | 'center' | 'between'
  align?: 'start' | 'end' | 'center'
}) => {
  return (
    <div
      style={{
        gap,
        width: fullWidth ? '100%' : undefined,
        justifyContent: justify ? JUSTIFY_MAP[justify] : undefined,
        alignItems: align ? ALIGN_MAP[align] : undefined,
        ...style,
      }}
      className={`Row ${className ?? ''}`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
