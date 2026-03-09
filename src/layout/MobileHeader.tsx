import React from 'react'
import { Link } from 'react-router-dom'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Row } from '~src/library/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LogoMark } from '~src/library/LogoMark'
import { useToggleMenuOpenOnMobile } from './menu-slice'
import { useCommandPaletteToggle } from '~src/command-palette/slice'
import './MobileHeader.scss'

export function MobileHeader() {
  const toggleMenuOpen = useToggleMenuOpenOnMobile()
  const toggleCommandPalette = useCommandPaletteToggle()
  return (
    <header className="MobileHeader">
      <Row
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <Link to="/" style={{ display: 'block' }}>
          <Row style={{ alignItems: 'center', gap: '0.5rem' }}>
            <LogoMark size={28} />
            <div className="logo-text">
              <span>Better</span>
              <span>Blood</span>
            </div>
          </Row>
        </Link>
        <Row style={{ alignItems: 'center', gap: '1rem' }}>
          <button
            type="button"
            className="MobileHeader-searchBtn"
            onClick={toggleCommandPalette}
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
          <FontAwesomeIcon icon={faBars} onClick={toggleMenuOpen} />
        </Row>
      </Row>
    </header>
  )
}
