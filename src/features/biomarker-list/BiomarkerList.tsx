import React from 'react'
import { BIOMARKERS } from '../../constants/biomarkers'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { BiomarkerCard } from '../biomarker-card/BiomarkerCard'
import { Col } from '~src/library/Col'

export function BiomarkerList() {
  const { data: userData } = useActiveProfileQuery()
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
      {items.map((item) => (
        <BiomarkerCard key={item.id} biomarkerId={item.id} />
      ))}
    </Col>
  )
}
