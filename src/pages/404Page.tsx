import React from 'react'
import { Page } from '../layout/Page'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'

const NotFoundPage: React.FC = () => {
  return (
    <Page>
      <PageContainer size="default">
        <PageHeader
          title="404 - Page Not Found"
          description="The page you are looking for does not exist."
        />
      </PageContainer>
    </Page>
  )
}

export default NotFoundPage
