import React from 'react'
import Table from '~src/library/table/Table'
import { Biomarker } from '~src/types/biomarker-types'
import { Badge } from '~src/library/Badge'
import { BiomarkerMeasurement } from '~src/types/user-types'
import { Row } from '~src/library/Row'
import { useDeleteBiomarkerMeasurementMutation } from '~src/api/profiles-api'
import { Button } from '~src/library/Button'
import { useToggleEditBiomarkerModal } from '~src/modals/edit-biomarker-modal/slice'
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
          label: 'Actions',
          key: 'value',
          rightAlignHeader: true,
          render: ({ value, timestamp }) => {
            return (
              <Row gap="1rem" style={{ justifyContent: 'flex-end' }}>
                <Button
                  text="Edit"
                  onClick={() =>
                    openEditMetricModal(true, metric.id, timestamp, value)
                  }
                />
                <Button
                  text="Delete"
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
