import React from 'react'
import { Page } from '../layout/Page'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'

const DisclaimerPage: React.FC = () => {
  return (
    <Page>
      <PageContainer size="default">
        <PageHeader title="Disclaimer" />
        <p>
          Any insights derived from Better Blood should not be used as medical
          advice.
          <br />
          The AI chat and data import functionality are not HIPAA compliant and
          should be used at your own risk.
          <br />
          Consult with your physician before making any changes to your health
          routine.
        </p>
      </PageContainer>
    </Page>
  )
}

export default DisclaimerPage
