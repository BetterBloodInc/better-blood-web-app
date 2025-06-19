import React from 'react'
import { Overline } from '~src/library/text/Overline'
import { BiomarkerIntervention } from '~src/constants/biomarker-interventions'
import { INTERVENTIONS } from '~src/constants/interventions'
import { ResourceLink } from '../resource-link/ResourceLink'
import { Col } from '~src/library/Col'
import { ProductLink } from '../product-link/ProductLink'
import { Row } from '~src/library/Row'
import { Badge } from '~src/library/Badge'
import { InterventionRequirement } from '~src/types/intervention-types'
import { useDarkModeSelector } from '~src/theme-slice'
import './InterventionCard.scss'

export function InterventionCard({
  intervention,
  status,
}: {
  intervention: BiomarkerIntervention
  status: InterventionRequirement
}): JSX.Element {
  const isDarkMode = useDarkModeSelector()
  const lookedUpIntervention = INTERVENTIONS[intervention.interventionId]
  if (!lookedUpIntervention) {
    return (
      <div className="intervention-card">
        <p>{intervention.description}</p>
      </div>
    )
  }
  const badgeColor =
    status === InterventionRequirement.None
      ? 'yellow'
      : intervention.requirements.includes(status)
        ? 'green'
        : 'red'
  return (
    <div className="intervention-card">
      <Row justify="between" gap="1rem" align="start">
        <Col gap="4px">
          <Overline>{lookedUpIntervention?.category}</Overline>
          <h4>{lookedUpIntervention?.name}</h4>
        </Col>
        <Badge
          color={badgeColor}
          dark={isDarkMode}
          text={
            intervention.requirements.length === 1
              ? intervention.requirements[0] === InterventionRequirement.Low
                ? 'TO INCREASE'
                : 'TO REDUCE'
              : 'TO OPTIMIZE'
          }
        />
      </Row>
      <p>{intervention?.description}</p>
      {!!intervention.resources?.length && (
        <>
          <Overline>Clinical Studies</Overline>
          <ul style={{ paddingLeft: '1rem' }}>
            {intervention.resources.map((resource) => (
              <li key={resource} style={{ listStyleType: 'disc' }}>
                <ResourceLink resourceId={resource} />
              </li>
            ))}
          </ul>
        </>
      )}
      {!!lookedUpIntervention.products?.length && (
        <>
          <Overline>Products</Overline>
          <Col gap="0.5rem">
            {lookedUpIntervention.products.map((product) => (
              <ProductLink key={product} productId={product} />
            ))}
          </Col>
        </>
      )}
    </div>
  )
}
