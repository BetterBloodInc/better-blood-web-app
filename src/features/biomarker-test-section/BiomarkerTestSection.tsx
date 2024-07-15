import React from 'react'
import { PROVIDER_TESTS } from '~src/constants/tests'
import { Col } from '~src/library/Col'
import { BiomarkerId } from '~src/types/biomarker-types'
import { TestCard } from '../test-card/TestCard'
import { BIOMARKERS } from '~src/constants/biomarkers'
import './BiomarkerTestSection.scss'

export function BiomarkerTestSection({
  biomarkerId,
}: {
  biomarkerId: BiomarkerId
}): JSX.Element {
  const metric = BIOMARKERS.find((m) => m.id === biomarkerId)
  const tests = Object.values(PROVIDER_TESTS)
    .flat()
    .filter((test) => test.measuredBiomarkers.includes(biomarkerId))
  const uniqueTests = tests.filter(
    (test, i) => tests.findIndex((t) => t.name === test.name) === i,
  )
  return (
    <Col id="tests" className="BiomarkerTestSection" gap="1rem">
      <Col gap="0.5rem">
        <h3>
          How or where to test{' '}
          <span className="metric-name">{metric?.name}</span>?
        </h3>
        <p>
          You can ask your primary physician to order a test for you or you can
          order a test yourself through one of the providers below.
        </p>
      </Col>
      {!uniqueTests ? (
        <div>Coming soon</div>
      ) : (
        <div className="grid">
          {uniqueTests.map((test) => (
            <TestCard
              key={test.providerId + test.name}
              biomarkerId={biomarkerId}
              test={test}
            />
          ))}
        </div>
      )}
    </Col>
  )
}
