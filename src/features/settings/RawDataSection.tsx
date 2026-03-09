import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import React from 'react'
import toast from 'react-hot-toast'
import { useDeleteAllDataMutation } from '~src/api/api'
import { Profile } from '~src/db/profile-db'
import { Button } from '~src/library/Button'
import { Card } from '~src/library/Card'
import { Col } from '~src/library/Col'
import { Row } from '~src/library/Row'

export function RawDataSection({ profile }: { profile: Profile | undefined }) {
  const { mutateAsync: deleteAllData } = useDeleteAllDataMutation()
  const [showAllData, setShowAllData] = React.useState(false)
  const onDeleteAllData = async () => {
    await deleteAllData()
    toast('Deleted all data. Refreshing...')
    setTimeout(() => window.location.reload(), 2000)
  }

  if (!profile) {
    return null
  }
  return (
    <Card className="RawData">
      <Col style={{ gap: '1rem', alignItems: 'flex-start' }}>
        <Row
          className="RawData__header"
          gap="2rem"
          style={{
            justifyContent: 'space-between',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Col gap="0.5rem">
            <h3>Browser Storage</h3>
            <p>
              By default your data is saved to your browser into IndexedDB. You
              can copy it from here if you would like to save it elsewhere, or
              you can delete it all from your browser.
            </p>
          </Col>
        </Row>
        <Row gap="1rem" style={{ alignItems: 'center' }}>
          <Button
            preIcon={showAllData ? faEyeSlash : faEye}
            text={showAllData ? 'Hide data' : 'Show all data'}
            onClick={() => setShowAllData(!showAllData)}
          />
          <Button text="Delete all data" onClick={onDeleteAllData} />
        </Row>
        {showAllData && (
          <pre
            style={{
              fontFamily: 'monospace',
              lineHeight: 1.5,
              padding: '1rem',
              borderRadius: 4,
              background: '#123',
              width: 'calc(100% - 2rem)',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            {JSON.stringify(profile, null, 2)}
          </pre>
        )}
      </Col>
    </Card>
  )
}
