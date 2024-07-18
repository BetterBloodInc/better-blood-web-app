import {
  faSave,
  faCloudDownload,
  faCloudUpload,
  faShareAltSquare,
  faLink,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import toast from 'react-hot-toast'
import { extractDataFromSpreadsheet } from '~src/api/google/sheets/extractDataFromSpreadsheet'
import {
  updateSheet,
  useGoogleSheetQuery,
} from '~src/api/google/sheets/google-sheets'
import { Button } from '~src/library/Button'
import { Row } from '~src/library/Row'
import { Profile } from '~src/db/profile-db'
import { useDarkModeSelector } from '~src/theme-slice'

export function GoogleSpreadsheetItem({
  profile,
  googleAccessToken,
  sheet,
}: {
  profile: Profile
  googleAccessToken: string | undefined
  sheet: { id: string; name: string }
}) {
  const isDarkMode = useDarkModeSelector()
  const { data: spreadsheet } = useGoogleSheetQuery({ spreadSheetId: sheet.id })
  const loadData = async () => {
    if (!spreadsheet || !googleAccessToken) {
      toast.error('No spreadsheet or access token.')
      return
    }
    try {
      const data = await extractDataFromSpreadsheet(
        googleAccessToken,
        spreadsheet,
      )
      const profile = await Profile.createFromData(data)
      await profile.save()
      toast.success('Loaded data from sheet.')
    } catch (e) {
      console.error(e)
      toast.error('Error loading data from sheet.')
    }
  }
  if (!googleAccessToken) {
    return null
  }
  return (
    <Row
      key={sheet.id}
      gap="1rem"
      style={{
        alignItems: 'center',
        justifyContent: 'space-between',
        background: isDarkMode ? 'rgba(0,0,0,0.4)' : undefined,
        border: isDarkMode ? undefined : '1px solid #ddd',
        padding: '1rem',
        borderRadius: '8px',
      }}
    >
      <a href={spreadsheet?.spreadsheetUrl} target="_blank" rel="noreferrer">
        <Row gap="0.5rem" style={{ alignItems: 'center' }}>
          <strong>{sheet.name}</strong>
          <FontAwesomeIcon icon={faExternalLink} />
        </Row>
      </a>
      <Row gap="1rem">
        <Button
          preIcon={faSave}
          text="Save"
          onClick={async () => {
            if (!profile) {
              toast.error('No data to save.')
              return
            }
            try {
              await updateSheet(
                googleAccessToken,
                sheet.id,
                spreadsheet?.sheets ?? [],
                profile,
              )
            } catch (e) {
              console.error(e)
              toast.error('Error saving sheet.')
            }
          }}
        />
        <Button preIcon={faCloudDownload} text="Load" onClick={loadData} />
      </Row>
    </Row>
  )
}
