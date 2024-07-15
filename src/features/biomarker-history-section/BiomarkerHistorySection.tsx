import { faPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Col } from '~src/library/Col'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { Biomarker } from '~src/types/biomarker-types'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { MetricTable } from '../MetricTable'
import { Button } from '~src/library/Button'
import './BiomarkerHistorySection.scss'

export function BiomarkerHistorySection({
  metric,
  data,
}: {
  metric: Biomarker
  data: BiomarkerMeasurement[]
}) {
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  if (!data.length) {
    return <></>
  }
  return (
    <Col className="BiomarkerHistorySection">
      <header>
        <Col gap="0.5rem">
          <h3>Measurement History</h3>
          <p style={{ margin: 0 }}>
            These are your past measurements for this biomarker.
          </p>
        </Col>
        <Button
          text="Add measurement"
          preIcon={faPlus}
          onClick={() => toggleAddBloodMetricsModal(true, metric.id)}
        />
      </header>
      <MetricTable metric={metric} data={data} />
    </Col>
  )
}
