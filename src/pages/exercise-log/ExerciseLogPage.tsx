import React, { lazy, Suspense } from 'react'

const ExerciseLog = lazy(() => import('./ExerciseLog.tsx'))

export function ExerciseLogPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExerciseLog />
    </Suspense>
  )
}

export default ExerciseLogPage
