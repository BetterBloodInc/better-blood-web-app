import { useActiveProfileQuery } from '~src/api/profiles-api'
import { Status } from '~src/features/StatusCircle'
import { BiomarkerId } from '~src/types/biomarker-types'
import { getMinMaxForMetric } from '~src/utils/utils'

export function useBiomarkerStatus(
  biomarkerId: BiomarkerId,
  value: number | null | undefined,
) {
  const { data: userData } = useActiveProfileQuery()
  const customReferenceRange =
    biomarkerId && userData?.referenceRanges?.[biomarkerId]
  const { min, max } = getMinMaxForMetric(
    biomarkerId,
    userData?.demographic,
    customReferenceRange,
  )
  let label = ''
  let status: Status = 'unknown'
  if (!min && !max) {
    label = 'TBD'
  } else if (value === undefined || value === null) {
    label = 'Not measured'
  } else if (value < min) {
    label = 'Low'
    status = 'bad'
  } else if (value > max) {
    label = 'High'
    status = 'bad'
  } else {
    label = 'Optimized'
    status = 'good'
  }
  return { label, status }
}
