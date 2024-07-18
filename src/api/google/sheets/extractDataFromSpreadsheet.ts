import { BiomarkerMeasurement, IProfile } from '~src/types/user-types'
import { PROFILE_SHEET_NAME } from '../constants'
import { BiomarkerId } from '~src/types/biomarker-types'
import { extractDataFromSheet } from './extractDataFromSheet'
import { INITIAL_BIOMARKER_MEASUREMENTS } from '~src/constants/user'
import { fetchSheetValueRange } from './api'

export const extractDataFromSpreadsheet = async (
  googleAuthToken: string,
  spreadsheet: gapi.client.sheets.Spreadsheet,
): Promise<IProfile> => {
  const sheets = spreadsheet.sheets ?? []
  const userProfileSheetShallow = sheets.find(
    (sheet) => sheet.properties?.title === PROFILE_SHEET_NAME,
  )
  if (!userProfileSheetShallow) {
    throw new Error('User profile sheet not found')
  }
  const userProfileSheet = await fetchSheetValueRange(
    googleAuthToken,
    spreadsheet.spreadsheetId ?? '',
    PROFILE_SHEET_NAME,
  )
  const userProfileData = userProfileSheet?.values?.slice(1) ?? []
  const userProfile =
    userProfileData?.reduce<Record<string, any>>((acc, row) => {
      const key = row[0]
      const value = row[1]
      if (key && value) {
        acc[key] = value
      }
      return acc
    }, {}) ?? {}
  const bloodSheets = sheets.filter(
    (sheet) => sheet.properties?.title !== PROFILE_SHEET_NAME,
  )
  const bloodData = bloodSheets.map((sheet) => {
    return {
      category: sheet.properties?.title ?? '',
      biomarkers: extractDataFromSheet(sheet),
    }
  })
  const extractedData: IProfile = {
    id: userProfile.id,
    name: userProfile.name,
    createdAt: userProfile.createdAt,
    demographic: userProfile,
    healthConditions: {},
    biomarkers: bloodData.reduce<Record<BiomarkerId, BiomarkerMeasurement[]>>(
      (acc, sheet) => {
        sheet.biomarkers.flat().forEach((biomarker) => {
          if (!acc[biomarker.biomarkerId]) {
            acc[biomarker.biomarkerId] = []
          }
          acc[biomarker.biomarkerId].push({
            value: parseFloat(biomarker.value ?? '0'),
            timestamp: parseInt(biomarker.timestamp ?? '0'),
            biomarkerId: biomarker.biomarkerId,
          })
        })
        return acc
      },
      INITIAL_BIOMARKER_MEASUREMENTS,
    ),
    interventions: {},
  }
  return extractedData
}
