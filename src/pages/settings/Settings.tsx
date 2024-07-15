import React, { useState } from 'react'
import { Col } from '~src/library/Col'
import { TabGroup } from '~src/library/TabGroup'
import { AISettings } from '~src/features/settings/AISettings'
import { DataStorageSettings } from '~src/features/settings/DataStorageSettings'
import './Settings.scss'

export const Settings = () => {
  const [tab, setTab] = useState('storage')
  return (
    <Col>
      <h1>Settings</h1>
      <p>Configure how you would like to use Better Blood. These settings are only saved to your browser.</p>
      <TabGroup
        options={[
          { label: 'Data Storage', value: 'storage' },
          { label: 'AI & LLMs', value: 'ai' },
        ]}
        setValue={setTab}
        value={tab}
      />
      <Col gap="1rem" style={{ marginTop: '1rem' }}>
        {tab === 'ai' && <AISettings />}
        {tab === 'storage' && <DataStorageSettings />}
      </Col>
    </Col>
  )
}
export default Settings
