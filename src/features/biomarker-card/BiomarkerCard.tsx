import React from 'react'
import { BiomarkerId } from '~src/types/biomarker-types'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { BIOMARKERS } from '~src/constants/biomarkers'
import { BiomarkerStatus } from '../biomarker-status/BiomarkerStatus'
import { Col } from '~src/library/Col'
import { useBiomarkerStatus } from '~src/hooks/useBiomarkerStatus'
import { Row } from '~src/library/Row'
import { useNavigate } from 'react-router-dom'
import './BiomarkerCard.scss'

export function BiomarkerCard({ biomarkerId }: { biomarkerId: BiomarkerId }) {
  const navigate = useNavigate()
  const { data: userData } = useActiveProfileQuery()
  const metric = BIOMARKERS.find((m) => m.id === biomarkerId)
  const latestMetric = (userData?.biomarkers[biomarkerId]?.sort(
    (a, b) => a.timestamp - b.timestamp,
  ) ?? [])?.[0]
  const { label, status } = useBiomarkerStatus(biomarkerId, latestMetric?.value)
  return (
    <Row
      className={`biomarker-card ${status}`}
      onClick={() => navigate(`/biomarkers/${biomarkerId}`)}
    >
      <Col>
        <div>{latestMetric?.value ?? '-'}</div>
        <div>{metric?.id.replace('_PCT', ' %')}</div>
      </Col>
      <Col>
        <div>{metric?.name}</div>
        <BiomarkerStatus biomarkerId={biomarkerId} value={latestMetric?.value} />
      </Col>
    </Row>
  )
}
