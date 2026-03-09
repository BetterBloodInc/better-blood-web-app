import React from 'react'
import Table from '~src/library/table/Table'
import { Biomarker } from '~src/types/biomarker-types'
import { Badge } from '~src/library/Badge'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { Row } from '~src/library/Row'
import {
  useActiveProfileQuery,
  useDeleteBiomarkerMeasurementMutation,
} from '~src/api/profiles-api'
import { useToggleEditBiomarkerModal } from '~src/modals/edit-biomarker-modal/slice'
import { IconButton } from '~src/library/IconButton'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { getMinMaxForMetric } from '~src/utils/utils'
import { BiomarkerStatus } from './biomarker-status/BiomarkerStatus'
import { useBiomarkerStatus } from '~src/hooks/useBiomarkerStatus'
export function MetricTable({
  metric,
  data,
}: {
  metric: Biomarker
  data: BiomarkerMeasurement[]
}) {
  const { mutate: deleteMeasurement } = useDeleteBiomarkerMeasurementMutation()
  const openEditMetricModal = useToggleEditBiomarkerModal()
  const latestMetric = data?.sort((a, b) => b.timestamp - a.timestamp)[0]
  return (
    <Table<BiomarkerMeasurement>
      items={data?.sort((a, b) => b.timestamp - a.timestamp)}
      itemGroupLabel="metrics"
      pluralItemLabel="metrics"
      theme="table-card"
      hidePagination
      hideSearch
      columnDefinitions={[
        {
          label: 'Date',
          key: 'timestamp',
          render: ({ timestamp }) => {
            const isLatest = timestamp === latestMetric.timestamp
            return (
              <Row
                style={{
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  whiteSpace: 'nowrap',
                }}
              >
                {new Date(timestamp).toISOString().split('T')[0]}
                {isLatest && (
                  <Badge text="Latest" style={{ marginLeft: '0.5rem' }} />
                )}
              </Row>
            )
          },
          //format(timestamp, 'yyyy-MM-dd hh:mm a'),
        },
        {
          label: 'Value',
          key: 'value',
          // TODO show if optimized or not
          render: ({ value }) => `${value} ${metric.measurementUnit}`,
        },
        // TODO add column for change since previous result
        {
          key: 'status',
          label: 'Status',
          sortDisabled: true,
          render: ({ biomarkerId, value }) => {
            return <BiomarkerStatus biomarkerId={biomarkerId} value={value} />
          },
        },
        {
          key: 'change',
          label: 'Change',
          sortDisabled: true,
          render: ({ biomarkerId, value }, index) => {
            const { label } = useBiomarkerStatus(biomarkerId, value)
            const previousValue = data[index + 1]?.value ?? value
            const delta = value - previousValue
            return (
              <div
                className={
                  delta === 0
                    ? undefined
                    : (label === 'Low' && delta < 0) ||
                        (label === 'High' && delta > 0)
                      ? 'text-red'
                      : 'text-green'
                }
              >
                {delta === 0 ? '' : delta > 0 ? '+' : '-'}
                {Math.abs(delta).toFixed(2)} {metric.measurementUnit}
              </div>
            )
          },
        },
        {
          label: 'Actions',
          key: 'value',
          rightAlignHeader: true,
          render: ({ value, timestamp }) => {
            return (
              <Row gap="1rem" style={{ justifyContent: 'flex-end' }}>
                <IconButton
                  tooltip="Edit"
                  icon={faPen}
                  onClick={() =>
                    openEditMetricModal(true, metric.id, timestamp, value)
                  }
                />
                <IconButton
                  tooltip="Delete"
                  icon={faTrash}
                  onClick={() =>
                    deleteMeasurement({ biomarkerId: metric.id, timestamp })
                  }
                />
              </Row>
            )
          },
        },
      ]}
    />
  )
}
