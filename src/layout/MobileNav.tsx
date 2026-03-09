import React from 'react'
import { Row } from '~src/library/Row'
import './MobileNav.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBarChart,
  faComments,
  faUser,
} from '@fortawesome/free-regular-svg-icons'
import { faEllipsis, faHome } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useSetMoreDrawerOpen } from './menu-slice'

const NAV = [
  { href: '/', icon: faHome, text: 'Home' },
  { href: '/biomarkers', icon: faBarChart, text: 'Biomarkers' },
  { href: '/profile', icon: faUser, text: 'Profile' },
  { href: '/ai-chat', icon: faComments, text: 'AI Chat' },
]

export function MobileNav() {
  const setMoreDrawerOpen = useSetMoreDrawerOpen()
  return (
    <Row className="MobileNav">
      {NAV.map((navItem) => (
        <NavLink
          key={navItem.href}
          to={navItem.href}
          className={({ isActive }) => (isActive ? 'active link' : 'link')}
        >
          <FontAwesomeIcon icon={navItem.icon} />
          <div>{navItem.text}</div>
        </NavLink>
      ))}
      <button
        type="button"
        className="MobileNav-more link"
        onClick={() => setMoreDrawerOpen(true)}
        aria-label="More options"
      >
        <FontAwesomeIcon icon={faEllipsis} />
        <div>More</div>
      </button>
    </Row>
  )
}
