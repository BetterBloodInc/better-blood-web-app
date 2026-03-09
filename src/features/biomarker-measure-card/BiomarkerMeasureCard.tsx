import React from 'react'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { Col } from '~src/library/Col'
import { Row } from '~src/library/Row'
import { Biomarker } from '~src/types/biomarker-types'
import { getMinMaxForMetric } from '~src/utils/utils'

export function BiomarkerMeasureCard({ metric }: { metric: Biomarker }) {
  const { data: userData, isFetching } = useActiveProfileQuery()
  const demographic = userData?.demographic
  const customReferenceRange =
    metric.id && userData?.referenceRanges?.[metric.id]
  const { min, max } = getMinMaxForMetric(
    metric.id,
    demographic,
    customReferenceRange,
  )
  const data =
    userData?.biomarkers[metric.id]?.sort(
      (a, b) => b.timestamp - a.timestamp,
    ) ?? []
  const latestMetric = data[0]
  const latestValue = latestMetric?.value ?? 0
  const isLatestMetricOptimized = latestValue >= min && latestValue <= max
  if (!data?.length || !latestMetric) {
    return <>{}</>
  }
  return (
    <Col
      className={`LatestMeasure ${isLatestMetricOptimized ? 'optimized' : ''}`}
      gap="2rem"
    >
      <label>
        {new Date(latestMetric.timestamp).toISOString().split('T')[0]}
      </label>
      <div style={{ fontSize: 48 }}>
        {latestMetric.value} {metric.measurementUnit}
      </div>
      <Row style={{ alignItems: 'center' }} gap="0.5rem">
        {/* <StatusCircle
                  status={
                    latestMetric.value < min
                      ? 'bad'
                      : latestMetric.value > max
                        ? 'bad'
                        : 'good'
                  }
                /> */}
        {isLatestMetricOptimized ? (
          <div className="text-green">
            OPTIMIZED [{min} - {max}]
          </div>
        ) : (
          <div className="text-red">
            {latestMetric?.value > max ? 'HIGH' : 'LOW'} [{min} - {max}]
          </div>
        )}
      </Row>
    </Col>
  )
}
