import React from 'react'
import { Col } from '../library/Col'
import { Row } from '../library/Row'
import { Biomarker } from '../types/biomarker-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons'
import { Button } from '../library/Button'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { Card } from '~src/library/Card'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { useDarkModeSelector } from '~src/theme-slice'
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
  const isDarkMode = useDarkModeSelector()
  if (!data.length) {
    return (
      <Card>
        <Col
          style={{
            flexGrow: 1,
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
          }}
        >
          <FontAwesomeIcon
            icon={faFolderOpen}
            style={{
              color: isDarkMode ? '#FFFA' : '#000A',
              fontSize: 60,
            }}
          />
          You have not added any data yet.
          <Button
            text={`Add ${metric.id} measurement`}
            preIcon={faPlus}
            onClick={() => toggleAddBloodMetricsModal(true, metric.id)}
          />
        </Col>
      </Card>
    )
  }
  return (
    <Row gap="2rem" className="MetricSection">
      <BiomarkerMeasureCard metric={metric} />
      <Row fullWidth style={{ minHeight: 400 }}>
        <MetricLineChart metric={metric} data={data} />
      </Row>
    </Row>
  )
}
