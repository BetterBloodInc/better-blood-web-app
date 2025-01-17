export const CLIENT_ID =
  '136443744009-u8l5jlfefhnk6di0779obm72q7gmnhm7.apps.googleusercontent.com'

export const VERTEX_AI_SCOPE = 'https://www.googleapis.com/auth/cloud-platform'

export const GOOGLE_SHEETS_SCOPE =
  'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/spreadsheets'
export const SCOPE = `${GOOGLE_SHEETS_SCOPE} ${VERTEX_AI_SCOPE}`

export const SPREAD_SHEETS_URL = `https://sheets.googleapis.com/v4/spreadsheets`

export const SPREAD_SHEET_URL = (spreadSheetId: string | number) =>
  `${SPREAD_SHEETS_URL}/${spreadSheetId}`

export const SHEET_URL = (spreadSheetId: string | number, sheetName: string) =>
  `${SPREAD_SHEETS_URL}/${spreadSheetId}/values/${sheetName}`

export const PROFILE_SHEET_NAME = 'Profile'
