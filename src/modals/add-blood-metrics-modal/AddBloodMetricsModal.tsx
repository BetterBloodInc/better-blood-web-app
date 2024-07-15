import React, { useState } from 'react'
import { Button } from '~src/library/Button'
import { Col } from '~src/library/Col'
import { Modal } from '~src/library/Modal'
import { Row } from '~src/library/Row'
import { BiomarkerId } from '~src/types/biomarker-types'
import { useAddBiomarkerMeasurementMutation } from '~src/api/profiles-api'
import { MetricRow } from '../../features/metric-row/MetricRow'
import { useToggleAddBloodMetricsModal } from './slice'
import { useAppSelector } from '~src/hooks'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import toast, { Toaster } from 'react-hot-toast'
import './AddBloodMetricsModal.scss'

type MetricRowData = {
  biomarkerId: BiomarkerId | undefined
  timestamp: number | undefined
  value: any
}

export function AddBloodMetricsModal() {
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  const { isVisible, biomarkerId } = useAppSelector(
    (state) => state.addBloodMetricsModal,
  )

  const [metrics, setMetrics] = useState<MetricRowData[]>([
    {
      biomarkerId,
      timestamp: Date.now(),
      value: 0,
    },
  ])
  const onClose = () => {
    toggleAddBloodMetricsModal(false)
    setMetrics([
      {
        biomarkerId,
        timestamp: Date.now(),
        value: 0,
      },
    ])
  }
  const { mutate: addBloodMetric } = useAddBiomarkerMeasurementMutation()
  const onSave = () => {
    if (!metrics.length) {
      toast.error('No metrics to save')
      return
    }
    if (
      metrics.some(
        (m) =>
          (!m.biomarkerId && !biomarkerId) ||
          !m.timestamp ||
          m.value === undefined ||
          m.value === null,
      )
    ) {
      toast.error('Please fill all fields')
      return
    }
    metrics.forEach((metric) => {
      try {
        addBloodMetric({
          biomarkerId: biomarkerId ?? (metric.biomarkerId as BiomarkerId),
          timestamp: metric.timestamp!,
          value: metric.value,
        })
      } catch (e) {
        toast.error('An error occurred')
      }
    })
    onClose()
  }
  return (
    <Modal isVisible={isVisible} onClose={onClose} style={{ width: 950 }}>
      <Col gap="1rem">
        <Row>
          <h2>Add measurement</h2>
        </Row>
        <Col style={{ gap: '1rem', overflowY: 'auto', maxHeight: '60vh' }}>
          {metrics.map((m, i) => (
            <MetricRow
              key={i}
              index={i}
              metric={biomarkerId ?? m.biomarkerId}
              metricDisabled={!!biomarkerId}
              onChangeMetric={(i, m) =>
                setMetrics((met) => {
                  met[i].biomarkerId = m
                  return met.slice()
                })
              }
              timestamp={m.timestamp}
              onChangeDate={(i, m) =>
                setMetrics((met) => {
                  met[i].timestamp = m
                  return met.slice()
                })
              }
              value={m.value}
              onChangeValue={(i, m) =>
                setMetrics((met) => {
                  met[i].value = m
                  return met.slice()
                })
              }
              onDelete={() =>
                setMetrics((met) => {
                  met.splice(i, 1)
                  return met.slice()
                })
              }
            />
          ))}
        </Col>
        <Row
          style={{ alignItems: 'flex-start', justifyContent: 'space-between' }}
        >
          <Button
            preIcon={faPlus}
            text="Add metric"
            onClick={() =>
              setMetrics((m) => [
                ...m,
                {
                  biomarkerId: undefined,
                  timestamp: Date.now(),
                  value: 0,
                },
              ])
            }
          />
          <Button text="Save" onClick={onSave} />
        </Row>
      </Col>
      <Toaster />
    </Modal>
  )
}
