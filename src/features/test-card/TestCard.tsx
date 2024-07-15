import React from 'react'
import { PROVIDERS, ProviderTest } from '~src/constants/tests'
import { Overline } from '~src/library/text/Overline'
import { Row } from '~src/library/Row'
import { Badge } from '~src/library/Badge'
import { Col } from '~src/library/Col'
import { BiomarkerId } from '~src/types/biomarker-types'
import { useDarkModeSelector } from '~src/theme-slice'
import { NavLink } from 'react-router-dom'
import './TestCard.scss'
import { useResponsive } from '~src/hooks/useResponsive'

export function TestCard({
  biomarkerId,
  test,
}: {
  biomarkerId: BiomarkerId
  test: ProviderTest
}): JSX.Element {
  const provider = PROVIDERS[test.providerId]
  const isDarkMode = useDarkModeSelector()
  const breakpoint = useResponsive()
  return (
    <Col className="test-card">
      <Overline>{provider.name}</Overline>
      <h4>{test.name}</h4>
      <p style={{ fontSize: 14, marginBottom: '0.5rem' }}>{test.description}</p>
      <Row
        gap="2rem"
        style={{
          marginBottom: '1rem',
          flexDirection: breakpoint === 'mobile' ? 'column' : 'row',
        }}
      >
        <Col gap="0.75rem">
          <Overline>Price</Overline>
          <div style={{ whiteSpace: 'nowrap' }}>
            {test.price.toFixed(2)} {test.priceUnit}
          </div>
        </Col>
        <Col gap="0.5rem">
          <Overline>Measured Biomarkers</Overline>
          <Row gap="0.5rem" style={{ flexWrap: 'wrap' }}>
            {test.measuredBiomarkers.map((metric) => (
              <NavLink to={'/biomarkers/' + metric} key={metric}>
                <Badge
                  text={metric.replace('_PCT', ' %')}
                  dark={isDarkMode || metric !== biomarkerId}
                  color={isDarkMode && metric === biomarkerId ? 'yellow' : 'red'}
                />
              </NavLink>
            ))}
          </Row>
        </Col>
      </Row>
      <a href={test.link} target="_blank">
        {test.link}
      </a>
    </Col>
  )
}
