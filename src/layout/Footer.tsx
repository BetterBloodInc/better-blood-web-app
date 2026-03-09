import React from 'react'
import { Link } from 'react-router-dom'
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
        <Row>
          Better Blood Inc. is a registered non-profit organization in the
          United States.
        </Row>
        <Row gap={12} justify="center" className="footer-links">
          <Link to="/disclaimer">Disclaimer</Link>
          <a
            href="https://betterblood.ai/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy
          </a>
        </Row>
      </Row>
    </footer>
  )
}
