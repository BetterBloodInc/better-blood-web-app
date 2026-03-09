import React, { lazy, Suspense } from 'react'
import { Page } from '~src/layout/Page.tsx'

const Profile = lazy(() => import('./Profile.tsx'))

export function ProfilePage() {
  return (
    <Page>
      <Suspense>
        <Profile />
      </Suspense>
    </Page>
  )
}

export default ProfilePage
