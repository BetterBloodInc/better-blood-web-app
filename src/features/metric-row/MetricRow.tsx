import { faTimes, faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { BIOMARKERS } from '~src/constants/biomarkers'
import { Col } from '~src/library/Col'
import { DatePicker } from '~src/library/form/DatePicker'
import { Dropdown } from '~src/library/form/Dropdown'
import { Input } from '~src/library/form/Input'
import { IconButton } from '~src/library/IconButton'
import { BiomarkerId } from '~src/types/biomarker-types'
import './MetricRow.scss'

const OPTIONS = BIOMARKERS.map((m) => ({
  value: m.id,
  label: m.id + ' - ' + m.name,
})).sort((a, b) => a.label.localeCompare(b.label))

export function MetricRow({
  index,
  metric,
  onChangeMetric,
  metricDisabled,
  timestamp,
  onChangeDate,
  value,
  onChangeValue,
  onDelete,
}: {
  index: number
  metric: BiomarkerId | undefined
  onChangeMetric(index: number, metric: BiomarkerId): void
  metricDisabled?: boolean
  timestamp: number | undefined
  onChangeDate(index: number, date: number | undefined): void
  value: any
  onChangeValue(index: number, value: number | string | undefined): void
  onDelete?(): void
}) {
  const metricData = BIOMARKERS.find((m) => m.id === metric)
  return (
    <div className="metric-row">
      <Dropdown
        name="metric"
        label="Biomarker"
        onSelect={(item) => onChangeMetric(index, item.value)}
        options={OPTIONS}
        value={OPTIONS.find((m) => m.value === metric)}
        disabled={metricDisabled}
      />
      <Col className="date-input">
        <DatePicker
          label="Date"
          onChange={(e) => onChangeDate(index, e?.getTime())}
          selected={timestamp ? new Date(timestamp) : undefined}
          showTimeInput={false}
          showTimeSelect={false}
        />
      </Col>
      <Input
        className="value-input"
        label="Value"
        type="number"
        onChangeValue={(e) => onChangeValue(index, e)}
        value={value}
        maxLength={6}
        suffix={metricData?.measurementUnit}
      />
      {onDelete && (
        <IconButton
          tooltip="delete"
          icon={faTimes}
          onClick={onDelete}
          style={{ width: 106 }}
        />
      )}
    </div>
  )
}
