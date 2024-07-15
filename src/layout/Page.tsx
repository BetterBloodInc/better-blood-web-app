import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { MobileHeader } from './MobileHeader'
import { MobileNav } from './MobileNav'
import './Page.scss'
import { useMenuCollapsedOnDesktopSelector } from './menu-slice'

export function Page({ children }: { children: React.ReactNode }) {
  const isMenuCollapsed = useMenuCollapsedOnDesktopSelector()
  return (
    <div className={`Page ${isMenuCollapsed ? 'menu-collapsed' : ''}`}>
      <MobileHeader />
      <Nav />
      <div className="Content">
        <main>{children}</main>
        <Footer />
      </div>
      <MobileNav />
    </div>
  )
}
