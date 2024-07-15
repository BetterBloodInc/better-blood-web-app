import React, { lazy, Suspense } from 'react'
import { Page } from '~src/layout/Page.tsx'

const Biomarkers = lazy(() => import('./Biomarkers.tsx'))

export function BiomarkersPage() {
  return (
    <Page>
      <Suspense>
        <Biomarkers />
      </Suspense>
    </Page>
  )
}

export default BiomarkersPage
