import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Modal } from '~src/library/Modal'
import {
  useCommandPaletteClose,
  useCommandPaletteIsOpen,
  useCommandPaletteToggle,
} from './slice'
import { BIOMARKERS } from '~src/constants/biomarkers'
import {
  faBarChart,
  faFileUpload,
  faGear,
  faHomeAlt,
  faInfoCircle,
  faMagnifyingGlass,
  faMoon,
  faPlus,
  faSun,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Input } from '~src/library/form/Input'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { useToggleUploadFileModal } from '~src/modals/upload-file-modal/slice'
import { useToggleConversationDrawer } from '~src/layout/conversation-drawer/slice'
import { useDarkModeSelector, useToggleTheme } from '~src/theme-slice'
import { BiomarkerId } from '~src/types/biomarker-types'
import './CommandPalette.scss'

export type CommandItem =
  | { type: 'page'; label: string; path: string; icon?: any }
  | {
      type: 'biomarker'
      label: string
      path: string
      id: BiomarkerId
      icon?: any
    }
  | {
      type: 'action'
      label: string
      keywords: string
      icon?: any
      run: () => void
    }

function getItems(
  toggleAddMeasurement: (open: boolean, biomarkerId?: BiomarkerId) => void,
  toggleUpload: (open: boolean) => void,
  toggleChat: (open: boolean) => void,
  toggleTheme: () => void,
  darkMode: boolean,
): CommandItem[] {
  const pages: CommandItem[] = [
    { type: 'page', label: 'Home', path: '/', icon: faHomeAlt },
    { type: 'page', label: 'Biomarkers', path: '/biomarkers', icon: faBarChart },
    { type: 'page', label: 'Profile', path: '/profile', icon: faUserCircle },
    { type: 'page', label: 'Settings', path: '/settings', icon: faGear },
    { type: 'page', label: 'About', path: '/about', icon: faInfoCircle },
  ]
  const biomarkers: CommandItem[] = BIOMARKERS.map((b) => ({
    type: 'biomarker' as const,
    label: b.name,
    path: `/biomarkers/${b.id}`,
    id: b.id,
    icon: faBarChart,
  }))
  const actions: CommandItem[] = [
    {
      type: 'action',
      label: 'Add measurement',
      keywords: 'add new measurement',
      icon: faPlus,
      run: () => toggleAddMeasurement(true),
    },
    {
      type: 'action',
      label: 'Import results',
      keywords: 'upload file import',
      icon: faFileUpload,
      run: () => toggleUpload(true),
    },
    {
      type: 'action',
      label: 'Chat with AI',
      keywords: 'ai chat',
      icon: faComments,
      run: () => toggleChat(true),
    },
    {
      type: 'action',
      label: darkMode ? 'Switch to light mode' : 'Switch to dark mode',
      keywords: 'theme dark light',
      icon: darkMode ? faSun : faMoon,
      run: () => toggleTheme(),
    },
  ]
  return [...pages, ...biomarkers, ...actions]
}

function filterItems(items: CommandItem[], query: string): CommandItem[] {
  const q = query.trim().toLowerCase()
  if (!q) return items.slice(0, 50)
  return items
    .filter((item) => {
      const label = item.label.toLowerCase()
      const keywords =
        item.type === 'action'
          ? (item as CommandItem & { keywords: string }).keywords.toLowerCase()
          : ''
      const id =
        item.type === 'biomarker'
          ? (item as CommandItem & { id: string }).id.toLowerCase()
          : ''
      return label.includes(q) || keywords.includes(q) || id.includes(q)
    })
    .slice(0, 50)
}

export function CommandPalette() {
  const isOpen = useCommandPaletteIsOpen()
  const close = useCommandPaletteClose()
  const toggle = useCommandPaletteToggle()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const toggleAddMeasurement = useToggleAddBloodMetricsModal()
  const toggleUpload = useToggleUploadFileModal()
  const toggleChat = useToggleConversationDrawer()
  const toggleTheme = useToggleTheme()
  const darkMode = useDarkModeSelector()

  const allItems = useMemo(
    () =>
      getItems(
        toggleAddMeasurement,
        toggleUpload,
        toggleChat,
        toggleTheme,
        darkMode,
      ),
    [
      toggleAddMeasurement,
      toggleUpload,
      toggleChat,
      toggleTheme,
      darkMode,
    ],
  )
  const filteredItems = useMemo(
    () => filterItems(allItems, query),
    [allItems, query],
  )

  useEffect(() => {
    setSelectedIndex(0)
  }, [query, filteredItems.length])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [toggle])

  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      setTimeout(() => inputRef.current?.focus(), 0)
    }
  }, [isOpen])

  const handleSelect = useCallback(
    (item: CommandItem) => {
      if (item.type === 'page' || item.type === 'biomarker') {
        navigate(item.path)
        close()
      } else if (item.type === 'action') {
        item.run()
        close()
      }
    },
    [navigate, close],
  )

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((i) =>
          i < filteredItems.length - 1 ? i + 1 : 0,
        )
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((i) =>
          i > 0 ? i - 1 : filteredItems.length - 1,
        )
      } else if (e.key === 'Enter') {
        e.preventDefault()
        const item = filteredItems[selectedIndex]
        if (item) handleSelect(item)
      } else if (e.key === 'Escape') {
        e.preventDefault()
        close()
      }
    },
    [filteredItems, selectedIndex, handleSelect, close],
  )

  useEffect(() => {
    const el = listRef.current
    if (!el) return
    const selected = el.querySelector('[data-selected="true"]')
    selected?.scrollIntoView({ block: 'nearest' })
  }, [selectedIndex, filteredItems])

  if (!isOpen) return null

  return (
    <Modal
      isVisible={isOpen}
      onClose={close}
      style={{ maxWidth: 560, width: '100%', padding: 0 }}
      contentLabel="Command palette"
    >
      <div className="CommandPalette">
        <div className="CommandPalette-search">
          <div className="CommandPalette-searchInput">
            <Input
              ref={inputRef}
              type="text"
              value={query}
              onChangeValue={(v) => setQuery(v as string)}
              onKeyDown={handleKeyDown}
              placeholder="Search pages, biomarkers, or actions..."
              prefixIcon={faMagnifyingGlass}
              aria-label="Command palette search"
              autoComplete="off"
            />
          </div>
          <kbd className="CommandPalette-kbd">⌘K</kbd>
        </div>
        <div ref={listRef} className="CommandPalette-list" role="listbox">
          {filteredItems.length === 0 ? (
            <div className="CommandPalette-empty">No results</div>
          ) : (
            filteredItems.map((item, i) => (
              <button
                key={
                  item.type === 'biomarker'
                    ? `biomarker-${item.id}`
                    : item.type === 'action'
                      ? `action-${item.label}`
                      : `page-${item.path}`
                }
                type="button"
                role="option"
                data-selected={i === selectedIndex}
                className={`CommandPalette-item ${i === selectedIndex ? 'selected' : ''}`}
                onMouseEnter={() => setSelectedIndex(i)}
                onClick={() => handleSelect(item)}
              >
                <FontAwesomeIcon
                  icon={item.icon ?? faBarChart}
                  className="CommandPalette-itemIcon"
                />
                <span>{item.label}</span>
                {item.type === 'page' && (
                  <span className="CommandPalette-itemMeta">Page</span>
                )}
                {item.type === 'biomarker' && (
                  <span className="CommandPalette-itemMeta">Biomarker</span>
                )}
              </button>
            ))
          )}
        </div>
      </div>
    </Modal>
  )
}
