import React from 'react'
import { Col } from '~src/library/Col'
import { BiomarkerId } from '~src/types/biomarker-types'
import { InterventionCard } from '../intervention-card/InterventionCard'
import { BIOMARKER_INTERVENTIONS_MAP } from '~src/constants/biomarker-interventions'
import './BiomarkerInterventionSection.scss'
import { BIOMARKERS } from '~src/constants/biomarkers'

export function BiomarkerInterventionSection({
  biomarkerId,
}: {
  biomarkerId: BiomarkerId
}): JSX.Element {
  const metric = BIOMARKERS.find((m) => m.id === biomarkerId)
  const interventions = BIOMARKER_INTERVENTIONS_MAP[biomarkerId] ?? []
  return (
    <Col id="interventions" gap="1rem" className="BiomarkerInterventionSection">
      <h3>
        How can one improve <span className="biomarker-name">{metric?.name}</span>?
      </h3>
      {/* <Col style={{ gap: '0.5rem' }}>
        <Overline>Impact By</Overline>
        <ImpactIndicator
          icon={faAppleAlt}
          impact={
            IMPACT_METRICS.find((i) => i.biomarkerId === biomarkerId)
              ?.impactFromNutrition ?? 'low'
          }
          label="Nutrition"
        />
        <ImpactIndicator
          icon={faDumbbell}
          impact={
            IMPACT_METRICS.find((i) => i.biomarkerId === biomarkerId)
              ?.impactFromExercise ?? 'low'
          }
          label="Exercise"
        />
        <ImpactIndicator
          icon={faDna}
          impact={
            IMPACT_METRICS.find((i) => i.biomarkerId === biomarkerId)
              ?.impactFromGenetics ?? 'low'
          }
          label="Genetics"
        />
        <ImpactIndicator
          icon={faClock}
          impact={
            IMPACT_METRICS.find((i) => i.biomarkerId === biomarkerId)
              ?.impactFromGenetics ?? 'low'
          }
          label="Age"
        />
      </Col> */}
      {!interventions.length ? (
        <div>Coming soon</div>
      ) : (
        <div className="grid">
          {interventions.map((intervention) => (
            <InterventionCard
              key={intervention.interventionId}
              intervention={intervention}
            />
          ))}
        </div>
      )}
    </Col>
  )
}
