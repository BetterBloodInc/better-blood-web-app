import React, { lazy, Suspense } from 'react'
import { Page } from '~src/layout/Page.tsx'

const Settings = lazy(() => import('./Settings.tsx'))

export function SettingsPage() {
  return (
    <Page>
      <Suspense>
        <Settings />
      </Suspense>
    </Page>
  )
}

export default SettingsPage
