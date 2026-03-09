import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { MobileHeader } from './MobileHeader'
import { MobileNav } from './MobileNav'
import { MobileMoreDrawer } from './MobileMoreDrawer'
import { CommandPalette } from '~src/command-palette/CommandPalette'
import { useGlobalShortcuts } from '~src/hooks/useGlobalShortcuts'
import './Page.scss'
import { useMenuCollapsedOnDesktopSelector } from './menu-slice'

export function Page({ children }: { children: React.ReactNode }) {
  useGlobalShortcuts()
  const isMenuCollapsed = useMenuCollapsedOnDesktopSelector()
  return (
    <div className={`Page ${isMenuCollapsed ? 'menu-collapsed' : ''}`}>
      <CommandPalette />
      <MobileHeader />
      <Nav />
      <div className="Content">
        <main>{children}</main>
        <Footer />
      </div>
      <MobileNav />
      <MobileMoreDrawer />
    </div>
  )
}
