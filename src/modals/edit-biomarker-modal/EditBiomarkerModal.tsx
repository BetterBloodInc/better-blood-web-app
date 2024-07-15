import React, { useEffect, useState } from 'react'
import { Button } from '~src/library/Button'
import { Col } from '~src/library/Col'
import { Modal } from '~src/library/Modal'
import { Row } from '~src/library/Row'
import { BiomarkerId } from '~src/types/biomarker-types'
import {
  useAddBiomarkerMeasurementMutation,
  useDeleteBiomarkerMeasurementMutation,
} from '~src/api/profiles-api'
import { MetricRow } from '../../features/metric-row/MetricRow'
import { useToggleEditBiomarkerModal } from './slice'
import { useAppSelector } from '~src/hooks'
import toast, { Toaster } from 'react-hot-toast'

type MetricRowData = {
  biomarkerId: BiomarkerId | undefined
  timestamp: number | undefined
  value: any
}

export function EditBiomarkerModal() {
  const toggleEditBiomarkerModal = useToggleEditBiomarkerModal()
  const { isVisible, biomarkerId, timestamp, value } = useAppSelector(
    (state) => state.editBiomarkerModal,
  )

  const [oldMetric, setOldMetric] = useState<MetricRowData>({
    biomarkerId,
    timestamp,
    value,
  })
  const [metric, setMetric] = useState<MetricRowData>({
    biomarkerId,
    timestamp,
    value,
  })
  useEffect(() => {
    setOldMetric({
      biomarkerId,
      timestamp,
      value,
    })
    setMetric({
      biomarkerId,
      timestamp,
      value,
    })
  }, [biomarkerId, timestamp, value])
  const onClose = () => {
    toggleEditBiomarkerModal(false)
    setOldMetric({
      biomarkerId,
      timestamp,
      value,
    })
    setMetric({
      biomarkerId,
      timestamp,
      value,
    })
  }
  const { mutate: deleteMetric } = useDeleteBiomarkerMeasurementMutation()
  const { mutate: addBloodMetric } = useAddBiomarkerMeasurementMutation()
  const onSave = () => {
    if (!oldMetric.biomarkerId || !oldMetric.timestamp) {
      toast.error('No metric to save')
      return
    }
    if (!metric) {
      toast.error('No metric to save')
      return
    }
    if (
      !metric.biomarkerId ||
      !metric.timestamp ||
      metric.value === undefined ||
      metric.value === null
    ) {
      console.error('metric: ', metric)
      toast.error('Please fill all fields')
      return
    }
    try {
      deleteMetric({
        biomarkerId: oldMetric.biomarkerId,
        timestamp: oldMetric.timestamp,
      })
      addBloodMetric({
        biomarkerId: biomarkerId ?? (metric.biomarkerId as BiomarkerId),
        timestamp: metric.timestamp!,
        value: metric.value,
      })
    } catch (e) {
      toast.error('An error occurred')
    }
    onClose()
  }
  return (
    <Modal isVisible={isVisible} onClose={onClose} style={{ width: 900 }}>
      <Col gap="1rem">
        <Row>
          <h2>Edit {oldMetric.biomarkerId} measurement</h2>
        </Row>
        <Col style={{ gap: '1rem', overflowY: 'auto', maxHeight: '60vh' }}>
          <MetricRow
            index={0}
            metric={biomarkerId}
            metricDisabled
            onChangeMetric={(i, m) =>
              setMetric((met) => {
                met.biomarkerId = m
                return { ...met }
              })
            }
            timestamp={metric.timestamp}
            onChangeDate={(i, m) =>
              setMetric((met) => {
                met.timestamp = m
                return { ...met }
              })
            }
            value={metric.value}
            onChangeValue={(i, m) =>
              setMetric((met) => {
                met.value = m
                return { ...met }
              })
            }
          />
        </Col>
        <Row style={{ alignItems: 'flex-start', justifyContent: 'flex-end' }}>
          <Button text="Save" onClick={onSave} />
        </Row>
      </Col>
      <Toaster />
    </Modal>
  )
}
