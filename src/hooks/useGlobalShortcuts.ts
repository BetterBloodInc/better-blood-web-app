import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCommandPaletteToggle } from '~src/command-palette/slice'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { useToggleTheme } from '~src/theme-slice'

function isInputFocused(): boolean {
  const el = document.activeElement
  if (!el || !(el instanceof HTMLElement)) return false
  const tag = el.tagName.toLowerCase()
  if (tag === 'input' || tag === 'textarea' || tag === 'select') return true
  if (el.isContentEditable) return true
  return false
}

export function useGlobalShortcuts() {
  const navigate = useNavigate()
  const togglePalette = useCommandPaletteToggle()
  const toggleAddMeasurement = useToggleAddBloodMetricsModal()
  const toggleTheme = useToggleTheme()
  const sequenceRef = useRef<{ key: string; at: number } | null>(null)
  const SEQUENCE_MS = 800

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const inInput = isInputFocused()
      const isMod = e.metaKey || e.ctrlKey

      if (e.key === 'k' && isMod) {
        e.preventDefault()
        togglePalette()
        return
      }
      if (e.key === 'Escape') {
        return
      }
      if (inInput) return

      if (e.key === 'g' && !isMod) {
        sequenceRef.current = { key: 'g', at: Date.now() }
        return
      }

      const seq = sequenceRef.current
      if (seq?.key === 'g' && Date.now() - seq.at < SEQUENCE_MS) {
        if (e.key === 'h') {
          e.preventDefault()
          navigate('/')
          sequenceRef.current = null
          return
        }
        if (e.key === 'b') {
          e.preventDefault()
          navigate('/biomarkers')
          sequenceRef.current = null
          return
        }
        if (e.key === 's') {
          e.preventDefault()
          navigate('/settings')
          sequenceRef.current = null
          return
        }
        if (e.key === 'p') {
          e.preventDefault()
          navigate('/profile')
          sequenceRef.current = null
          return
        }
      }
      sequenceRef.current = null

      if (e.key === 'n' && !isMod) {
        e.preventDefault()
        toggleAddMeasurement(true)
        return
      }
      if (e.key === 't' && !isMod) {
        e.preventDefault()
        toggleTheme()
        return
      }
      if (e.key === '?' && !isMod) {
        e.preventDefault()
        togglePalette()
        return
      }
    }
    window.addEventListener('keydown', handleKeyDown, true)
    return () => window.removeEventListener('keydown', handleKeyDown, true)
  }, [
    navigate,
    togglePalette,
    toggleAddMeasurement,
    toggleTheme,
  ])
}
