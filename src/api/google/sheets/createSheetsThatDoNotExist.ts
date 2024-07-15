import { BLOOD_METRIC_CATEGORIES } from '~src/constants/biomarker-categories'
import { PROFILE_SHEET_NAME } from '../constants'
import { batchUpdate } from './api'

export const createSheetsThatDoNotExist = async (
  token: string,
  spreadsheetId: string,
  existingSheets: gapi.client.sheets.Sheet[],
) => {
  const existingSheetsNameToIdMap = existingSheets.reduce<
    Record<string, number | undefined>
  >((acc, sheet) => {
    acc[sheet.properties?.title ?? ''] = sheet.properties?.sheetId
    return acc
  }, {})
  const userProfileSheetId = existingSheetsNameToIdMap[PROFILE_SHEET_NAME]
  console.log('userProfileSheetId: ', userProfileSheetId)
  let requests: { addSheet: gapi.client.sheets.AddSheetRequest }[] = []
  // create a new sheet if user profile sheet doesn't exist
  if (!userProfileSheetId) {
    requests.push({
      addSheet: {
        properties: {
          title: PROFILE_SHEET_NAME,
        },
      },
    })
  }

  const existingSheetsNameSet = new Set(
    existingSheets.map((sheet) => sheet.properties?.title),
  )
  const missingSheets = BLOOD_METRIC_CATEGORIES.filter(
    (category) => !existingSheetsNameSet.has(category),
  )

  // create new sheets for missing categories
  requests = requests.concat(
    missingSheets.map((category) => {
      return {
        addSheet: {
          properties: {
            title: category,
          },
        },
      }
    }),
  )
  if (requests.length > 0) {
    await batchUpdate(spreadsheetId, token, requests)
  }
}
