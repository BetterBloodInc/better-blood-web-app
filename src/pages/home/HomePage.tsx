import React, { lazy, Suspense } from 'react'
import { Page } from '~src/layout/Page.tsx'

const Home = lazy(() => import('./Home.tsx'))

export function HomePage() {
  return (
    <Page>
      <Suspense>
        <Home />
      </Suspense>
    </Page>
  )
}

export default HomePage
