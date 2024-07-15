import React, { useEffect } from 'react'
import { Col } from '~src/library/Col'
import { Button } from '~src/library/Button'
import { toast } from 'react-hot-toast'
import {
  createSpreadsheet,
  useGoogleSpreadsheetListQuery,
} from '~src/api/google/sheets/google-sheets'
import { GoogleSpreadsheetItem } from '~src/features/google-sheet/GoogleSpreadsheetItem'
import {
  handleRedirectCallback,
  redirectToGoogleAuth,
  useGoogleOAuthAccessTokenQuery,
} from '~src/api/google/google-oauth'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { RawDataSection } from './RawDataSection'
import { Card } from '~src/library/Card'
import { Row } from '~src/library/Row'

export function DataStorageSettings() {
  const { data: profile } = useActiveProfileQuery()
  const { data: googleOAuthAccessToken, refetch: refetchGoogleToken } =
    useGoogleOAuthAccessTokenQuery()
  const {
    data: googleSheetsData,
    error: googleSheetsError,
    isLoading: loadingSheets,
  } = useGoogleSpreadsheetListQuery()

  useEffect(() => {
    if (handleRedirectCallback()) {
      refetchGoogleToken()
    }
  }, [refetchGoogleToken])

  return (
    <Col gap="1rem">
      {profile && <RawDataSection profile={profile} />}
      <Card>
        <Row
          style={{
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Col gap="0.5rem">
            <h3>Google Sheets (Beta)</h3>
            <p>
              You can sync your data to a Google Sheet to access your data
              between devices.
              <br />
              Please ask for access in the Discord server.
            </p>
          </Col>
          <Button
            text="Create Google Sheet"
            onClick={() => {
              if (!googleOAuthAccessToken) {
                toast.error('Please connect to Google OAuth first.')
                return
              }
              createSpreadsheet(googleOAuthAccessToken)
            }}
          />
        </Row>
        {googleOAuthAccessToken ? (
          <>
            {loadingSheets && <p>Loading Google Sheets...</p>}
            {googleSheetsError && (
              <p className="text-red">
                Error loading Google Sheets: {googleSheetsError.message}
              </p>
            )}
            {googleSheetsData && profile && (
              <Col style={{ marginTop: '1rem' }} gap="1rem">
                {googleSheetsData.map((sheet: any) => (
                  <GoogleSpreadsheetItem
                    key={sheet.id}
                    sheet={sheet}
                    googleAccessToken={googleOAuthAccessToken}
                    profile={profile}
                  />
                ))}
              </Col>
            )}
          </>
        ) : (
          <Row style={{ marginTop: '1rem' }}>
            <Button
              text="Connect to Google OAuth"
              onClick={() => {
                redirectToGoogleAuth()
              }}
            />
          </Row>
        )}
      </Card>
    </Col>
  )
}
