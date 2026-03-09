import React, { CSSProperties } from 'react'
import { Fader } from './transition/Fader'
import './PageContainer.scss'

type PageSize = 'narrow' | 'default' | 'wide' | 'full'

interface PageContainerProps {
  children: React.ReactNode
  size?: PageSize
  className?: string
  style?: CSSProperties
}

export function PageContainer({
  children,
  size = 'default',
  className,
  style,
}: PageContainerProps) {
  return (
    <Fader isVisible>
      <div
        className={`PageContainer PageContainer--${size} ${className ?? ''}`}
        style={style}
      >
        {children}
      </div>
    </Fader>
  )
}
