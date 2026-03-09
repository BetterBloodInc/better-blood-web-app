import React from 'react'
import { useDarkModeSelector } from '~src/theme-slice'

export function LogoMark({ size }: { size: number }) {
  const isDarkMode = useDarkModeSelector()
  return (
    <img
      src={`/img/logo${isDarkMode ? '-dark' : ''}.svg`}
      alt="logo"
      style={{ width: size, height: size, transition: '0.3s' }}
    />
  )
}
