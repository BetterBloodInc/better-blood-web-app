import React from 'react'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import {
  IconDefinition,
  faArrowLeft,
  faArrowRight,
  faCoffee,
  faExternalLink,
  faGear,
  faHomeAlt,
  faInfoCircle,
  faMoon,
  faSun,
  faUserCircle,
  faWarning,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useDarkModeSelector, useToggleTheme } from '~src/theme-slice'
import { LogoMark } from '~src/library/LogoMark'
import {
  useMenuCollapsedOnDesktopSelector,
  useMenuOpenOnMobileSelector,
  useToggleMenuCollapsedOnDesktop,
  useToggleMenuOpenOnMobile,
} from './menu-slice'
import './Nav.scss'
import { useResponsive } from '~src/hooks/useResponsive'
import { Tooltip } from 'react-tooltip'
import { ProfileSelector } from './profile-selector/ProfileSelector'

export function Nav() {
  const toggleTheme = useToggleTheme()
  const darkMode = useDarkModeSelector()
  const isMenuOpen = useMenuOpenOnMobileSelector()
  const isMenuCollapsed = useMenuCollapsedOnDesktopSelector()
  const toggleMenuCollapsed = useToggleMenuCollapsedOnDesktop()
  const breakpoint = useResponsive()
  return (
    <nav
      className={`nav-container ${isMenuOpen ? 'open' : ''} ${isMenuCollapsed ? 'collapsed' : ''}`}
    >
      {isMenuCollapsed && <Tooltip anchorSelect=".link" />}
      <div className="logo-container">
        <LogoMark size={isMenuCollapsed ? 32 : 50} />
        <div className="logo-text">
          <span>Better</span>
          <span>Blood</span>
        </div>
      </div>
      <ProfileSelector isCollapsed={isMenuCollapsed} />
      <Tab label="Home" icon={faHomeAlt} href="/" />
      <Tab label="Biomarkers" icon={faBarChart} href="/biomarkers" />
      {/* <Tab label="Exercise Log" icon={faDumbbell} href="/exercise-log" /> */}
      {/* <Tab label="Diet Log" icon={faAppleAlt} href="/diet-log" /> */}
      <Tab label="Profile" icon={faUserCircle} href="/profile" />
      <Tab label="Settings" icon={faGear} href="/settings" />
      <Tab label="About" icon={faInfoCircle} href="/about" />
      <Tab
        label="Discord"
        icon={faDiscord}
        href="https://discord.gg/5SdZ4G2pB9"
        postIcon={faExternalLink}
      />
      <Tab
        label="Donate"
        icon={faCoffee}
        href="https://www.buymeacoffee.com/devgregfong"
        postIcon={faExternalLink}
      />
      <div
        style={{
          padding: '1rem 1rem 0.5rem',
        }}
      />
      <Tab
        label={darkMode ? 'Light mode' : 'Dark mode'}
        icon={darkMode ? faSun : faMoon}
        onClick={() => toggleTheme()}
        href="/dark-mode"
      />
      {breakpoint !== 'mobile' && (
        <Tab
          label={isMenuCollapsed ? 'Expand menu' : 'Collapse menu'}
          icon={isMenuCollapsed ? faArrowRight : faArrowLeft}
          onClick={() => {
            toggleMenuCollapsed()
          }}
          href="/menu-collapsed"
        />
      )}
    </nav>
  )
}

function Tab({
  icon,
  postIcon,
  label,
  href,
  onClick,
}: {
  icon: IconDefinition
  postIcon?: IconDefinition
  label: string
  href?: string
  onClick?: () => void
}) {
  const toggleMenuOpen = useToggleMenuOpenOnMobile()
  return (
    <NavLink
      to={href ?? '/'}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          e.stopPropagation()
          onClick()
        }
        toggleMenuOpen()
      }}
      className={({ isActive }) => (isActive ? 'active link' : 'link')}
      data-tooltip-content={label}
      data-tooltip-place="right"
    >
      <div style={{ width: 28, textAlign: 'center' }}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="nav-link-label">
        <div>{label}</div>
        {postIcon && (
          <div className="post-icon" style={{ width: 28, textAlign: 'center' }}>
            <FontAwesomeIcon icon={postIcon} />
          </div>
        )}
      </div>
    </NavLink>
  )
}
