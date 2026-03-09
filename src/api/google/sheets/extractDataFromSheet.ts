import { BIOMARKERS } from '~src/constants/biomarkers'

function matchesHeader(value: string | undefined, biomarkerId: string, aliases?: string[]): boolean {
  if (!value) return false
  const normalized = value.trim().toLowerCase()
  if (normalized === biomarkerId.toLowerCase()) return true
  if (aliases?.some((a) => a.trim().toLowerCase() === normalized)) return true
  return false
}

export const extractDataFromSheet = (sheet: gapi.client.sheets.Sheet) => {
  const data = sheet.data?.[0]?.rowData?.slice(1)
  if (!data) {
    return []
  }
  const biomarkers = BIOMARKERS.map((biomarker) => {
    const biomarkerData = data.find((row) => {
      const header = row.values?.[0]?.formattedValue
      return matchesHeader(header, biomarker.id, biomarker.aliases)
    })
    if (!biomarkerData) {
      return []
    }
    const biomarkerMetrics = biomarkerData.values?.slice(4)
    if (!biomarkerMetrics) {
      return []
    }
    return biomarkerMetrics.map((metric) => {
      return {
        biomarkerId: biomarker.id,
        value: metric.formattedValue,
        timestamp: metric.formattedValue,
      }
    })
  })
  return biomarkers
}
