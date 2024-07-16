import React from 'react'
import { Card } from '~src/library/Card'
import { Col } from '~src/library/Col'
import { BiomarkerId } from '~src/types/biomarker-types'
import { ImportanceCard } from '../importance-card/ImportanceCard'
import { BIOMARKER_IMPORTANCE_MAP } from '~src/constants/biomarker-importance'
import { BIOMARKERS } from '~src/constants/biomarkers'
import './BiomarkerImportanceSection.scss'

export function BiomarkerImportanceSection({
  biomarkerId,
}: {
  biomarkerId: BiomarkerId
}): JSX.Element {
  const metric = BIOMARKERS.find((m) => m.id === biomarkerId)
  const items = BIOMARKER_IMPORTANCE_MAP[biomarkerId] ?? []
  return (
    <Col id="importance" gap="1rem" className="BiomarkerImportanceSection">
      <h3>
        Why is <span className="biomarker-name">{metric?.name}</span> important?
      </h3>
      {!items.length ? (
        <div>Coming soon</div>
      ) : (
        <div className="grid">
          {items.map((item) => (
            <ImportanceCard key={item.importance} data={item} />
          ))}
        </div>
      )}
    </Col>
  )
}
