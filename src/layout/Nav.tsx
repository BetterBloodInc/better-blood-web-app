import React from 'react'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faBarChart } from '@fortawesome/free-regular-svg-icons'
import {
  IconDefinition,
  faArrowLeft,
  faArrowRight,
  faBell,
  faCoffee,
  faExternalLink,
  faGear,
  faHomeAlt,
  faInfoCircle,
  faMagnifyingGlass,
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
import { useCommandPaletteToggle } from '~src/command-palette/slice'
import { useWhatsNewOpen } from '~src/whats-new/slice'
import { useChangelogLastSeenQuery } from '~src/api/settings-api'
import { CHANGELOG_VERSION } from '~src/constants/changelog'

export function Nav() {
  const toggleTheme = useToggleTheme()
  const toggleCommandPalette = useCommandPaletteToggle()
  const toggleMenuOpen = useToggleMenuOpenOnMobile()
  const darkMode = useDarkModeSelector()
  const isMenuOpen = useMenuOpenOnMobileSelector()
  const isMenuCollapsed = useMenuCollapsedOnDesktopSelector()
  const toggleMenuCollapsed = useToggleMenuCollapsedOnDesktop()
  const breakpoint = useResponsive()
  const openWhatsNew = useWhatsNewOpen()
  const { data: lastSeenVersion } = useChangelogLastSeenQuery()
  const hasNewChangelog = CHANGELOG_VERSION !== lastSeenVersion
  const openCommandPalette = () => {
    toggleCommandPalette()
    if (breakpoint === 'mobile') toggleMenuOpen()
  }
  return (
    <nav
      className={`nav-container ${isMenuOpen ? 'open' : ''} ${isMenuCollapsed ? 'collapsed' : ''}`}
    >
      {isMenuCollapsed && <Tooltip anchorSelect=".nav-item" />}
      <div className="logo-container">
        <LogoMark size={isMenuCollapsed ? 32 : 50} />
        <div className="logo-text">
          <span>Better</span>
          <span>Blood</span>
        </div>
      </div>
      <ProfileSelector isCollapsed={isMenuCollapsed} />
      <NavItem
        actionOnly
        label="Search"
        icon={faMagnifyingGlass}
        shortcut="⌘K or ⌘⇧K"
        onClick={openCommandPalette}
        ariaLabel="Open command palette"
      />
      <NavItem label="Home" icon={faHomeAlt} to="/" shortcut="G H" />
      <NavItem label="Biomarkers" icon={faBarChart} to="/biomarkers" shortcut="G B" />
      <NavItem label="Profile" icon={faUserCircle} to="/profile" shortcut="G P" />
      <NavItem label="Settings" icon={faGear} to="/settings" shortcut="G S" />
      <NavItem label="About" icon={faInfoCircle} to="/about" />
      <NavItem
        actionOnly
        label="What's new"
        icon={faBell}
        onClick={openWhatsNew}
        showDot={hasNewChangelog}
      />
      <NavItem
        label="Discord"
        icon={faDiscord}
        to="https://discord.gg/5SdZ4G2pB9"
        postIcon={faExternalLink}
        external
      />
      <NavItem
        label="Donate"
        icon={faCoffee}
        to="https://www.buymeacoffee.com/devgregfong"
        postIcon={faExternalLink}
        external
      />
      <div
        style={{
          padding: '1rem 1rem 0.5rem',
        }}
      />
      <NavItem
        actionOnly
        label={darkMode ? 'Light mode' : 'Dark mode'}
        icon={darkMode ? faSun : faMoon}
        shortcut="T"
        onClick={toggleTheme}
      />
      {breakpoint !== 'mobile' && (
        <NavItem
          actionOnly
          label={isMenuCollapsed ? 'Expand menu' : 'Collapse menu'}
          icon={isMenuCollapsed ? faArrowRight : faArrowLeft}
          onClick={toggleMenuCollapsed}
        />
      )}
    </nav>
  )
}

/** Shared nav row: link (with optional external) or action-only button. Same structure and class for consistent layout. */
function NavItem({
  icon,
  postIcon,
  label,
  shortcut,
  to,
  onClick,
  actionOnly,
  external,
  ariaLabel,
  showDot,
}: {
  icon: IconDefinition
  postIcon?: IconDefinition
  label: string
  shortcut?: string
  to?: string
  onClick?: () => void
  actionOnly?: boolean
  external?: boolean
  ariaLabel?: string
  showDot?: boolean
}) {
  const toggleMenuOpen = useToggleMenuOpenOnMobile()
  const tooltipContent = shortcut ? `${label} (${shortcut})` : label
  const content = (
    <>
      <div style={{ width: 28, textAlign: 'center', position: 'relative' }}>
        <FontAwesomeIcon icon={icon} />
        {showDot && <span className="nav-item-dot" aria-hidden />}
      </div>
      <div className="nav-link-label">
        <div>{label}</div>
        {postIcon && (
          <div className="post-icon" style={{ width: 28, textAlign: 'center' }}>
            <FontAwesomeIcon icon={postIcon} />
          </div>
        )}
      </div>
    </>
  )
  if (actionOnly && onClick) {
    return (
      <button
        type="button"
        className="nav-item"
        onClick={() => {
          onClick()
          toggleMenuOpen()
        }}
        data-tooltip-content={tooltipContent}
        data-tooltip-place="right"
        aria-label={ariaLabel ?? label}
      >
        {content}
      </button>
    )
  }
  if (external && to) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="nav-item"
        data-tooltip-content={tooltipContent}
        data-tooltip-place="right"
      >
        {content}
      </a>
    )
  }
  return (
    <NavLink
      to={to ?? '/'}
      onClick={() => toggleMenuOpen()}
      className={({ isActive }) => (isActive ? 'active nav-item' : 'nav-item')}
      data-tooltip-content={tooltipContent}
      data-tooltip-place="right"
    >
      {content}
    </NavLink>
  )
}
