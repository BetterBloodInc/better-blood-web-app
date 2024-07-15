import React from 'react'
import { BiomarkerId } from '~src/types/biomarker-types'
import { StatusCircle } from '../StatusCircle'
import { Row } from '~src/library/Row'
import { useBiomarkerStatus } from '~src/hooks/useBiomarkerStatus'
export function BiomarkerStatus({
  biomarkerId,
  value,
}: {
  biomarkerId: BiomarkerId
  value: number | null | undefined
}) {
  const { label, status } = useBiomarkerStatus(biomarkerId, value)
  return (
    <Row gap="0.5rem" style={{ alignItems: 'center' }}>
      <StatusCircle status={status} />
      <span style={{textWrap: 'nowrap'}}>{label}</span>
    </Row>
  )
}
