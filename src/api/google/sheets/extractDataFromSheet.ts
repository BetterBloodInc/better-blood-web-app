import { BIOMARKERS } from "~src/constants/biomarkers"

export const extractDataFromSheet = (sheet: gapi.client.sheets.Sheet) => {
    const data = sheet.data?.[0]?.rowData?.slice(1)
    if (!data) {
      return []
    }
    const biomarkers = BIOMARKERS.map((biomarker) => {
      const biomarkerData = data.find((row) => {
        return row.values?.[0]?.formattedValue === biomarker.id
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