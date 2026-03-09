import React, { lazy, Suspense } from 'react'
import { Page } from '~src/layout/Page.tsx'

const AIChat = lazy(() => import('./AIChat.tsx'))

export function AIChatPage() {
  return (
    <Page>
      <Suspense>
        <AIChat />
      </Suspense>
    </Page>
  )
}

export default AIChatPage
