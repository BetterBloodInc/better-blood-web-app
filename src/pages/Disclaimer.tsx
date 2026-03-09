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
          Better Blood is <strong>not a medical device</strong> and does not
          provide medical advice, diagnosis, or treatment. Any insights,
          charts, or suggestions in the app are for personal tracking and
          education only.
        </p>
        <p>
          The AI chat and data import functionality are not HIPAA compliant.
          Data you enter may be sent to third-party services (e.g. OpenAI,
          Google). Use these features at your own risk.
        </p>
        <p>
          Consult a qualified healthcare professional before making any changes
          to your health, diet, supplements, or medications. Do not disregard
          or delay seeking medical advice because of something you see or hear
          in Better Blood.
        </p>
        <p>
          The app is provided &ldquo;as is&rdquo; without warranty of any kind.
          Better Blood Inc. is not liable for any decisions or outcomes
          resulting from your use of the app.
        </p>
      </PageContainer>
    </Page>
  )
}

export default DisclaimerPage
