import { useQuery } from '@tanstack/react-query'
import { BLOOD_BIOMARKER_CATEGORIES } from '~src/constants/biomarker-categories'
import toast from 'react-hot-toast'
import { BIOMARKERS } from '~src/constants/biomarkers'
import { formatRange, getMinMaxForMetric } from '~src/utils/utils'
import {
  saveGoogleOAuthAccessToken,
  useGoogleOAuthAccessTokenQuery,
} from '../google-oauth'
import { PROFILE_SHEET_NAME, SPREAD_SHEETS_URL } from '../constants'
import { createSheetsThatDoNotExist } from './createSheetsThatDoNotExist'
import { batchUpdate, fetchSpreadsheet } from './api'
import { IProfile } from '~src/types/user-types'

const listSpreadsheets = async (googleAuthToken: string) => {
  const res = await fetch(
    'https://www.googleapis.com/drive/v3/files?q=mimeType="application/vnd.google-apps.spreadsheet"&fields=files(id,name)',
    {
      headers: {
        Authorization: `Bearer ${googleAuthToken}`,
      },
    },
  )
  if (res.status === 401) {
    saveGoogleOAuthAccessToken(null)
  }
  if (!res.ok) {
    throw new Error(`Failed to load sheets: ${res.status}`)
  }
  const data = await res.json()
  return data.files
}

export const createSpreadsheet = async (
  token: string,
  activeProfileName: string,
) => {
  const sheets = BLOOD_BIOMARKER_CATEGORIES.map((category) => {
    return {
      properties: {
        title: category,
      },
      data: [
        {
          startRow: 0,
          startColumn: 0,
          rowData: {
            values: [
              { userEnteredValue: { stringValue: 'Biomarker ID' } },
              { userEnteredValue: { stringValue: 'Biomarker Name' } },
              { userEnteredValue: { stringValue: 'Range' } },
              { userEnteredValue: { stringValue: 'Unit' } },
              { userEnteredValue: { stringValue: 'Date' } },
            ],
          },
        },
      ],
    }
  })
  const res = await fetch(SPREAD_SHEETS_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      properties: {
        title: `${activeProfileName}'s Biomarkers ${new Date().toISOString().split('T')[0]}`,
      },
      sheets,
    }),
  })

  if (!res.ok) {
    throw new Error(`HTTP error! Status: ${res.status}`)
  }
  const data = await res.json()
  toast.success('Created spreadsheet')
  return data.spreadsheetId
}

// make this into a tanstack mutation
export const updateSheet = async (
  token: string,
  spreadsheetId: string,
  existingSheets: gapi.client.sheets.Sheet[],
  profile: IProfile,
) => {
  await createSheetsThatDoNotExist(token, spreadsheetId, existingSheets)
  const spreadsheet = await fetchSpreadsheet(token, spreadsheetId)
  if (!spreadsheet) {
    throw new Error('Failed to fetch spreadsheet')
  }
  const updatedExistingSheets = spreadsheet.sheets ?? []
  const existingSheetsNameToIdMap = updatedExistingSheets.reduce<
    Record<string, number | undefined>
  >((acc, sheet) => {
    acc[sheet.properties?.title ?? ''] = sheet.properties?.sheetId
    return acc
  }, {})
  const userProfileSheetId = existingSheetsNameToIdMap[PROFILE_SHEET_NAME]

  let endColumnIndex = 5
  let requests: {
    updateCells: gapi.client.sheets.UpdateCellsRequest
  }[] = []

  // add user profile as sheet
  const userProfileSheet = {
    id: profile.id,
    name: profile.name,
    notes: profile.notes,
    createdAt: profile.createdAt,
    ...profile.demographic,
  }
  const userProfileRows = Object.entries(userProfileSheet).map(
    ([key, value]) => {
      return {
        values: [
          { userEnteredValue: { stringValue: key } },
          { userEnteredValue: { stringValue: value?.toString() } },
        ],
      }
    },
  )
  requests.push({
    updateCells: {
      range: {
        sheetId: userProfileSheetId,
        startRowIndex: 0,
        endRowIndex: 1 + userProfileRows.length,
        startColumnIndex: 0,
        endColumnIndex: 2,
      },
      rows: [
        {
          values: [
            { userEnteredValue: { stringValue: 'Key' } },
            { userEnteredValue: { stringValue: 'Value' } },
          ],
        },
        ...userProfileRows,
      ],
      fields: 'userEnteredValue',
    },
  })
  // add categories as sheets
  requests = requests.concat(
    BLOOD_BIOMARKER_CATEGORIES.map((category, i) => {
      const sheetId = existingSheetsNameToIdMap[category]
      const biomarkers = BIOMARKERS.filter((biomarker) =>
        biomarker.categories.includes(category),
      )
      const dates = new Set<string>()
      const flattenedMetrics = biomarkers.flatMap(
        (biomarker) => profile.biomarkers[biomarker.id] ?? [],
      )
      // get dates from metrics
      flattenedMetrics.forEach((metric) => {
        const date = new Date(metric.timestamp).toISOString().split('T')[0]
        dates.add(date)
      })
      const sortedDatesInReverse = Array.from(dates).sort().reverse()

      const rows = biomarkers.map<gapi.client.sheets.RowData>((biomarker) => {
        if (profile.biomarkers[biomarker.id]?.length + 5 > endColumnIndex) {
          endColumnIndex = profile.biomarkers[biomarker.id]?.length + 5
        }
        const biomarkerIdCell: gapi.client.sheets.CellData = {
          userEnteredValue: { stringValue: biomarker.id },
        }
        const biomarkerNameCell: gapi.client.sheets.CellData = {
          userEnteredValue: { stringValue: biomarker.name },
        }
        const { min, max } = getMinMaxForMetric(
          biomarker.id,
          profile.demographic,
        )
        const biomarkerRangeCell: gapi.client.sheets.CellData = {
          userEnteredValue: { stringValue: formatRange(min, max) },
        }
        const biomarkerUnitCell: gapi.client.sheets.CellData = {
          userEnteredValue: { stringValue: biomarker.measurementUnit },
        }
        const biomarkerMetrics = profile.biomarkers[biomarker.id] ?? []
        const dataCells: gapi.client.sheets.CellData[] =
          sortedDatesInReverse.map((date) => {
            const metricMatchingDate = biomarkerMetrics.find(
              (metric) =>
                new Date(metric.timestamp).toISOString().split('T')[0] === date,
            )
            return {
              userEnteredValue: {
                stringValue: metricMatchingDate?.value?.toString(),
              },
            }
          })
        return {
          values: [
            biomarkerIdCell,
            biomarkerNameCell,
            biomarkerRangeCell,
            biomarkerUnitCell,
          ].concat(dataCells),
        }
      })
      return {
        updateCells: {
          range: {
            sheetId,
            startRowIndex: 0,
            endRowIndex: 1 + rows.length,
            startColumnIndex: 0,
            endColumnIndex,
          },
          rows: [
            {
              values: [
                { userEnteredValue: { stringValue: 'Biomarker ID' } },
                { userEnteredValue: { stringValue: 'Biomarker Name' } },
                { userEnteredValue: { stringValue: 'Range' } },
                { userEnteredValue: { stringValue: 'Unit' } },
                ...sortedDatesInReverse.map((date) => ({
                  userEnteredValue: { stringValue: date },
                })),
              ],
            },
            ...rows,
          ],
          fields: 'userEnteredValue',
        },
      }
    }),
  )
  await batchUpdate(spreadsheetId, token, requests)
  toast.success('Sheet updated successfully')
}

export const useGoogleSpreadsheetListQuery = () => {
  const { data: googleAuthToken } = useGoogleOAuthAccessTokenQuery()
  return useQuery({
    queryKey: ['useGoogleSpreadsheetListQuery'],
    queryFn: async () => listSpreadsheets(googleAuthToken!),
    enabled: !!googleAuthToken,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export const useGoogleSheetQuery = ({
  spreadSheetId,
}: {
  spreadSheetId: string | undefined
}) => {
  const { data: googleAuthToken } = useGoogleOAuthAccessTokenQuery()
  return useQuery({
    queryKey: ['useGoogleSheetQuery', spreadSheetId],
    queryFn: async () => fetchSpreadsheet(googleAuthToken!, spreadSheetId!),
    enabled: !!googleAuthToken && !!spreadSheetId,
  })
}
