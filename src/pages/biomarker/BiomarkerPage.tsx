import React, { lazy, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '~src/layout/Page.tsx'
import { BiomarkerId } from '~src/types/biomarker-types.ts'

const Biomarker = lazy(() => import('./Biomarker.tsx'))

type Params = {
  biomarkerId: string
}

export function BiomarkerPage() {
  const { biomarkerId } = useParams<Params>()
  return (
    <Page>
      <Suspense>
        {biomarkerId && <Biomarker biomarkerId={biomarkerId as BiomarkerId} />}
      </Suspense>
    </Page>
  )
}

export default BiomarkerPage
