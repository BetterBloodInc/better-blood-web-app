import React from 'react'
import { BIOMARKERS } from '../../constants/biomarkers'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { BiomarkerCard } from '../biomarker-card/BiomarkerCard'
import { Col } from '~src/library/Col'
import { Row } from '~src/library/Row'
import { IconButton } from '~src/library/IconButton'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
type Filter = 'optimized' | 'low' | 'high' | null

export function BiomarkerList() {
  const { data: userData, isFetching } = useActiveProfileQuery()
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  const items = BIOMARKERS.map<any>((m) => {
    const latestMeasurement = (userData?.biomarkers[m.id]?.sort(
      (a, b) => a.timestamp - b.timestamp,
    ) ?? [])?.[0]
    return {
      id: m.id,
      category: m.categories[0],
      name: m.name,
      value: latestMeasurement?.value,
      date: latestMeasurement?.timestamp,
      units: m.measurementUnit,
    }
  }).sort((a, b) => {
    if (a.value) {
      return -1
    }
    if (b.value) {
      return 1
    }
    return a.name.localeCompare(b.name)
  })
  return (
    <Col gap="1rem">
      <Row gap="1rem" justify="between" align="center">
        <h1>Biomarkers</h1>
        <Row gap="0.5rem">
          <IconButton
            icon={faPlus}
            tooltip="Add biomarker"
            onClick={() => toggleAddBloodMetricsModal(true)}
          />
        </Row>
      </Row>
      {items.map((item) => (
        <BiomarkerCard key={item.id} biomarkerId={item.id} />
      ))}
    </Col>
  )
}
