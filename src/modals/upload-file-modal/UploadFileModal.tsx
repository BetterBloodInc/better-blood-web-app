import React, { useState } from 'react'
import { Button } from '~src/library/Button'
import { Col } from '~src/library/Col'
import { Modal } from '~src/library/Modal'
import { Row } from '~src/library/Row'
import { BiomarkerId } from '~src/types/biomarker-types'
import { useAddBiomarkerMeasurementMutation } from '~src/api/profiles-api'
import { useToggleUploadFileModal } from './slice'
import { useAppSelector } from '~src/hooks'
import { MetricRow } from '~src/features/metric-row/MetricRow'
import { FileUploader } from '~src/features/file-uploader/FileUploader'
import { Toaster } from 'react-hot-toast'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { useSelectedLLMQuery } from '~src/api/settings-api'

type MetricRowData = {
  biomarkerId: BiomarkerId | undefined
  timestamp: number | undefined
  value: any
}

export function UploadFileModal() {
  const { data: selectedLLM } = useSelectedLLMQuery()
  const toggleUploadFileModal = useToggleUploadFileModal()
  const { isVisible } = useAppSelector((state) => state.uploadFileModal)

  const [metrics, setMetrics] = useState<MetricRowData[]>([])
  const onClose = () => {
    toggleUploadFileModal(false)
    setMetrics([])
  }
  const { mutate: addBiomarkerMeasurement } =
    useAddBiomarkerMeasurementMutation()
  const onSave = () => {
    metrics.forEach((metric) => {
      if (
        !metric.value ||
        metric.biomarkerId === undefined ||
        !metric.timestamp
      ) {
        console.error(metric)
        alert('missing required value')
        return
      }
      try {
        addBiomarkerMeasurement({
          biomarkerId: metric.biomarkerId,
          timestamp: metric.timestamp,
          value: metric.value,
        })
      } catch (e) {
        alert('failed to add blood metric')
      }
    })
    onClose()
  }
  return (
    <Modal
      isVisible={isVisible}
      onClose={onClose}
      style={{ width: 800, maxWidth: '90vw' }}
    >
      <Col gap="1rem">
        <Col>
          <Row>
            <h2>Import results</h2>
          </Row>
          <p>
            Import your metrics from an image/screenshot of your previous
            lab/test results.
          </p>
        </Col>
        <Col gap="2rem" style={{ overflowY: 'auto', maxHeight: '60vh' }}>
          <FileUploader onReceiveMetrics={setMetrics} />
          {!!metrics.length && (
            <Col style={{ gap: '1rem' }}>
              {metrics.map((m, i) => (
                <MetricRow
                  key={i}
                  index={i}
                  metric={m.biomarkerId}
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
                />
              ))}
            </Col>
          )}
          {!!metrics.length && (
            <Row style={{ alignItems: 'flex-start' }}>
              <Button text="Save" onClick={onSave} />
            </Row>
          )}
          <Col align="start">
            <Row gap={6} align="center">
              <FontAwesomeIcon icon={faInfoCircle} className="text-yellow" />
              <h4 className="text-yellow">Personal Identifiable Information</h4>
            </Row>
            <p>
              Images are sent to{' '}
              {selectedLLM === 'gemini' ? 'Google' : 'OpenAI'} to extract the
              data. Please <span className="text-yellow">redact</span> any
              personally identifiable information (PII) from your image before
              extraction. LLMs are not HIPAA compliant. Use at your own
              discretion.
            </p>
          </Col>
        </Col>
      </Col>
      <Toaster />
    </Modal>
  )
}
