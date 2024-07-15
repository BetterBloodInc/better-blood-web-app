import { SHEET_URL, SPREAD_SHEET_URL, SPREAD_SHEETS_URL } from '../constants'

export const fetchSpreadsheet = async (
  googleAuthToken: string,
  spreadSheetId: string | number,
): Promise<gapi.client.sheets.Spreadsheet | undefined> => {
  const url = SPREAD_SHEET_URL(spreadSheetId);
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${googleAuthToken}`,
    },
  })
  const res = await response.json()
  if (!response.ok) {
    console.error('Error fetching spreadsheet:', res)
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return res
}

export async function batchUpdate(
  spreadsheetId: string,
  token: string,
  requests: any[],
) {
  const res = await fetch(`${SPREAD_SHEETS_URL}/${spreadsheetId}:batchUpdate`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      requests,
    }),
  })

  if (!res.ok) {
    console.error('Error updating sheet:', res)
    throw new Error(`HTTP error! Status: ${res.status}`)
  }
  return res
}

export const fetchSheetValueRange = async (
  googleAuthToken: string,
  spreadSheetId: string | number,
  sheetName: string,
): Promise<gapi.client.sheets.ValueRange | undefined> => {
  const response = await fetch(SHEET_URL(spreadSheetId, sheetName), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${googleAuthToken}`,
    },
  })
  const res = await response.json()
  if (!response.ok) {
    console.error('Error fetching sheet:', res)
    throw new Error(`HTTP error! Status: ${response.status}`)
  }
  return res
}
