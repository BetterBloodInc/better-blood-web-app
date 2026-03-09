import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGear,
  faInfoCircle,
  faBell,
  faSun,
  faMoon,
  faTimes,
  faDiscord,
  faCoffee,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons'
import { faDiscord as faDiscordBrand } from '@fortawesome/free-brands-svg-icons'
import { Col } from '~src/library/Col'
import { Row } from '~src/library/Row'
import {
  useMoreDrawerOpenSelector,
  useSetMoreDrawerOpen,
} from '~src/layout/menu-slice'
import { useDarkModeSelector, useToggleTheme } from '~src/theme-slice'
import { useWhatsNewOpen } from '~src/whats-new/slice'
import './MobileMoreDrawer.scss'

export function MobileMoreDrawer() {
  const isOpen = useMoreDrawerOpenSelector()
  const setOpen = useSetMoreDrawerOpen()
  const location = useLocation()
  const darkMode = useDarkModeSelector()
  const toggleTheme = useToggleTheme()
  const openWhatsNew = useWhatsNewOpen()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, setOpen])

  if (!isOpen) return null

  return (
    <>
      <button
        type="button"
        className="MobileMoreDrawer-overlay"
        onClick={() => setOpen(false)}
        aria-label="Close menu"
      />
      <div
        className="MobileMoreDrawer"
        role="dialog"
        aria-modal="true"
        aria-label="More options"
      >
        <Row className="MobileMoreDrawer-header">
          <span className="MobileMoreDrawer-title">More</span>
          <button
            type="button"
            className="MobileMoreDrawer-close"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </Row>
        <Col className="MobileMoreDrawer-list" gap="0">
          <Link
            to="/settings"
            className="MobileMoreDrawer-item"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faGear} />
            <span>Settings</span>
          </Link>
          <Link
            to="/about"
            className="MobileMoreDrawer-item"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>About</span>
          </Link>
          <button
            type="button"
            className="MobileMoreDrawer-item"
            onClick={() => {
              openWhatsNew()
              setOpen(false)
            }}
          >
            <FontAwesomeIcon icon={faBell} />
            <span>What&apos;s new</span>
          </button>
          <button
            type="button"
            className="MobileMoreDrawer-item"
            onClick={() => {
              toggleTheme()
            }}
          >
            <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            <span>{darkMode ? 'Light mode' : 'Dark mode'}</span>
          </button>
          <a
            href="https://discord.gg/5SdZ4G2pB9"
            target="_blank"
            rel="noopener noreferrer"
            className="MobileMoreDrawer-item"
          >
            <FontAwesomeIcon icon={faDiscordBrand} />
            <span>Discord</span>
            <FontAwesomeIcon icon={faExternalLink} className="MobileMoreDrawer-external" />
          </a>
          <a
            href="https://www.buymeacoffee.com/devgregfong"
            target="_blank"
            rel="noopener noreferrer"
            className="MobileMoreDrawer-item"
          >
            <FontAwesomeIcon icon={faCoffee} />
            <span>Donate</span>
            <FontAwesomeIcon icon={faExternalLink} className="MobileMoreDrawer-external" />
          </a>
        </Col>
      </div>
    </>
  )
}
