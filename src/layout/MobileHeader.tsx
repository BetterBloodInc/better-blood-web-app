import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Row } from '~src/library/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LogoMark } from '~src/library/LogoMark'
import { useToggleMenuOpenOnMobile } from './menu-slice'
import './MobileHeader.scss'

export function MobileHeader() {
  const toggleMenuOpen = useToggleMenuOpenOnMobile()
  return (
    <header className="MobileHeader">
      <Row style={{ alignItems: 'center', justifyContent: 'space-between', flexGrow: 1 }}>
        <a href="/" style={{ display: 'block' }}>
          <Row style={{ alignItems: 'center', gap: '0.5rem' }}>
            <LogoMark size={28} />
            <div className="logo-text">
              <span>Better</span>
              <span>Blood</span>
            </div>
          </Row>
        </a>
        <FontAwesomeIcon icon={faBars} onClick={toggleMenuOpen} />
      </Row>
    </header>
  )
}
