import React from 'react'
import { Page } from '../layout/Page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons'
import { SECONDARY_COLOR } from '~src/constants/theme'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'

const ComingSoonPage: React.FC = () => {
  return (
    <Page>
      <PageContainer size="default" style={{ alignItems: 'center', textAlign: 'center' }}>
        <FontAwesomeIcon
          icon={faHelmetSafety}
          size="5x"
          color={SECONDARY_COLOR}
        />
        <PageHeader
          title="Coming Soon"
          description="This page is under construction. Please check back later."
        />
      </PageContainer>
    </Page>
  )
}

export default ComingSoonPage
