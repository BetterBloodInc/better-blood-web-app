import React, { useState, useEffect } from 'react'
import './Fader.scss'

export const Fader = ({
  isVisible,
  children,
}: {
  isVisible: boolean
  children: React.ReactNode
}) => {
  const [shouldRender, setRender] = useState(isVisible)

  useEffect(() => {
    if (isVisible) setRender(true)
  }, [isVisible])

  const onAnimationEnd = () => {
    if (!isVisible) setRender(false)
  }

  return (
    shouldRender && (
      <div
        className={isVisible ? 'fade-in' : 'fade-out'}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  )
}
