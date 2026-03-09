import React from 'react'
import { Overline } from '~src/library/text/Overline'
import { BiomarkerImportance } from '~src/constants/biomarker-importance'
import { Col } from '~src/library/Col'
import './ImportanceCard.scss'

export function ImportanceCard({
  data,
}: {
  data: BiomarkerImportance
}): JSX.Element {
  return (
    <Col className="importance-card">
      <Overline>{data.category}</Overline>
      {data.title && <h4>{data.title}</h4>}
      <p>{data.description}</p>
    </Col>
  )
}
