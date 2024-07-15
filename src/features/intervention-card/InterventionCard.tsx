import React from 'react'
import { Overline } from '~src/library/text/Overline'
import { BiomarkerIntervention } from '~src/constants/biomarker-interventions'
import './InterventionCard.scss'

export function InterventionCard({
  intervention,
}: {
  intervention: BiomarkerIntervention
}): JSX.Element {
  return (
    <div className="intervention-card">
      <Overline>{intervention.category}</Overline>
      <h4>{intervention.intervention}</h4>
      <p>{intervention.description}</p>
    </div>
  )
}
