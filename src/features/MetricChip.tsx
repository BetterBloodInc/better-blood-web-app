import React from 'react'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { BiomarkerId } from '~src/types/biomarker-types'
import { getMinMaxForMetric } from '~src/utils/utils'
import './MetricChip.scss'

export function MetricChip({
  biomarkerId,
  value,
}: {
  biomarkerId: BiomarkerId
  value: number
}) {
  const { data: userData, isFetching } = useActiveProfileQuery()
  const demographic = userData?.demographic
  const { min, max } = getMinMaxForMetric(biomarkerId, demographic)
  const isOptimized = value >= min && value <= max
  return (
    <dl className={`metric-chip ${isOptimized ? 'optimized' : ''}`}>
      <dd>{value}</dd>
      <dt>{biomarkerId}</dt>
    </dl>
  )
}
