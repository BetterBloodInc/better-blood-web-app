import React from 'react'
import { Overline } from '~src/library/text/Overline'
import { BiomarkerIntervention } from '~src/constants/biomarker-interventions'
import { INTERVENTIONS } from '~src/constants/interventions'
import './InterventionCard.scss'
import { ResourceLink } from '../resource-link/ResourceLink'
import { Col } from '~src/library/Col'

export function InterventionCard({
  intervention,
}: {
  intervention: BiomarkerIntervention
}): JSX.Element {
  const lookedUpIntervention = INTERVENTIONS[intervention.interventionId]
  if (!lookedUpIntervention) {
    return (
      <div className="intervention-card">
        <p>{intervention.description}</p>
      </div>
    )
  }
  return (
    <div className="intervention-card">
      <Overline>{lookedUpIntervention?.category}</Overline>
      <h4>{lookedUpIntervention?.name}</h4>
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
    </div>
  )
}
