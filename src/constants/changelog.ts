/**
 * Current changelog version. Bump when releasing user-visible changes.
 * Stored in localStorage to show "What's new" indicator until user has seen it.
 */
export const CHANGELOG_VERSION = '7'

export type ChangelogEntry = {
  version: string
  date: string
  title: string
  items: string[]
}

export const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    version: '7',
    date: '2025-03',
    title: 'Polish & accessibility',
    items: [
      'Smooth theme transition when switching dark/light mode',
      'Light mode card surfaces with subtle shadows and borders',
      'Display density: choose Compact or Comfortable in Settings',
      'What\'s new modal to discover recent updates',
      'Full focus management in modals and AI Chat drawer',
      'ARIA labels on dialogs and icon buttons for screen readers',
    ],
  },
  {
    version: '6',
    date: '2025-03',
    title: 'Accessibility',
    items: [
      'Focus trap and return focus in modals and command palette',
      'Escape closes AI Chat drawer and settings panel',
      'Accessible dialog names for screen readers',
    ],
  },
  {
    version: '5',
    date: '2025-03',
    title: 'Consistency',
    items: [
      'Danger button variant for destructive actions (e.g. Delete profile)',
      'Accordion FAQ on About page',
      'Toast with optional Undo for reversible actions',
      'Table vs List view toggle on Biomarkers page',
    ],
  },
  {
    version: '4',
    date: '2025-03',
    title: 'Data UX',
    items: [
      'Biomarker table filters (status) saved in URL — share or bookmark views',
      'Pin biomarkers to keep them at the top of the table',
      'Hover actions on table rows: Pin, Add measurement, View',
    ],
  },
]
