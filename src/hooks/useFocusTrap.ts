import { useEffect, useRef } from 'react'

const FOCUSABLE =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

function getFocusables(container: HTMLElement): HTMLElement[] {
  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.hasAttribute('disabled') && el.tabIndex !== -1,
  )
}

/**
 * Trap focus inside the container when active. On activate: save the previously
 * focused element and move focus to the first focusable inside the container.
 * On deactivate: restore focus to the saved element. While active, Tab/Shift+Tab
 * cycle within the container.
 */
export function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, isActive: boolean) {
  const previousFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    if (isActive) {
      previousFocusRef.current = document.activeElement as HTMLElement | null
      const focusables = getFocusables(containerRef.current)
      const first = focusables[0]
      if (first) {
        first.focus()
      }
    } else {
      const toRestore = previousFocusRef.current
      if (toRestore && typeof toRestore.focus === 'function') {
        toRestore.focus()
      }
      previousFocusRef.current = null
    }
  }, [isActive, containerRef])

  // Restore focus when component unmounts (e.g. drawer closes)
  useEffect(() => {
    return () => {
      const toRestore = previousFocusRef.current
      if (toRestore && typeof toRestore.focus === 'function') {
        toRestore.focus()
      }
    }
  }, [])

  useEffect(() => {
    if (!isActive || !containerRef.current) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const focusables = getFocusables(containerRef.current!)
      if (focusables.length === 0) return

      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      const current = document.activeElement as HTMLElement

      if (e.shiftKey) {
        if (current === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (current === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    const el = containerRef.current
    el.addEventListener('keydown', handleKeyDown)
    return () => el.removeEventListener('keydown', handleKeyDown)
  }, [isActive, containerRef])
}
