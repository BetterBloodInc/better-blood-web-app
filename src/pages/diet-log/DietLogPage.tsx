import React, { lazy, Suspense } from 'react'

const DietLog = lazy(() => import('./DietLog.tsx'))

export function DietLogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DietLog />
    </Suspense>
  )
}

export default DietLogPage
