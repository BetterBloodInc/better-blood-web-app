import React, { lazy, Suspense } from 'react'
import { Page } from '~src/layout/Page.tsx'

const About = lazy(() => import('./About.tsx'))

export function AboutPage() {
  return (
    <Page>
      <Suspense>
        <About />
      </Suspense>
    </Page>
  )
}

export default AboutPage
