import React from 'react'
import './Footer.scss'
import { Row } from '~src/library/Row'
import { useResponsive } from '~src/hooks/useResponsive'

export function Footer() {
  const breakpoint = useResponsive()
  return (
    <footer className="Footer">
      <Row
        justify="between"
        fullWidth
        gap={12}
        style={{ flexDirection: breakpoint === 'mobile' ? 'column' : 'row' }}
      >
        <Row>Better Blood Inc. is a registered non-profit organization in the United States.</Row>
        <Row gap={12} justify="center">
          <a href="/disclaimer">Disclaimer</a>
          <a href="https://betterblood.ai/privacy">Privacy</a>
        </Row>
      </Row>
    </footer>
  )
}
