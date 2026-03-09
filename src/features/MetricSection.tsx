import React from 'react'
import { Col } from '../library/Col'
import { Row } from '../library/Row'
import { Biomarker } from '../types/biomarker-types'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { Button } from '../library/Button'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { Card } from '~src/library/Card'
import { EmptyState } from '~src/library/EmptyState'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { BiomarkerMeasureCard } from './biomarker-measure-card/BiomarkerMeasureCard'
import { MetricLineChart } from './MetricLineChart'
import './MetricSection.scss'

export enum MetricSectionView {
  Table,
  LineChart,
}

export function MetricSection({
  metric,
  data,
}: {
  metric: Biomarker
  data: BiomarkerMeasurement[]
}) {
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  if (!data.length) {
    return (
      <Card>
        <h3>Your measurements</h3>
        <EmptyState
          icon={faFolderOpen}
          title="No measurements yet"
          description={`Add your first ${metric.name} result to see your trend and compare to your reference range.`}
          action={
            <Button
              text={`Add ${metric.id} measurement`}
              preIcon={faPlus}
              onClick={() => toggleAddBloodMetricsModal(true, metric.id)}
            />
          }
        />
      </Card>
    )
  }
  return (
    <Col gap="1rem">
      <h3>Your Measurements</h3>
      <Row gap="2rem" className="MetricSection">
        <BiomarkerMeasureCard metric={metric} />
        <Row fullWidth style={{ minHeight: 400 }}>
          <MetricLineChart metric={metric} data={data} />
        </Row>
      </Row>
    </Col>
  )
}
