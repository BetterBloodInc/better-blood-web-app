import React from 'react'
import { Page } from '../layout/Page'
import { Col } from '~src/library/Col'

const DisclaimerPage: React.FC = () => {
  return (
    <Page>
      <Col gap="1rem">
        <h1>Disclaimer</h1>
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
      </Col>
    </Page>
  )
}

export default DisclaimerPage
