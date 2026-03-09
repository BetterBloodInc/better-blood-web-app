import React, { useState } from 'react'
import { Col } from '~src/library/Col'
import { TabGroup } from '~src/library/TabGroup'
import { AISettings } from '~src/features/settings/AISettings'
import { DataStorageSettings } from '~src/features/settings/DataStorageSettings'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'
import { PillSelect } from '~src/library/form/PillSelect'
import {
  useDisplayDensityQuery,
  useSetDisplayDensity,
  type DisplayDensity,
} from '~src/api/settings-api'
import './Settings.scss'

export const Settings = () => {
  const [tab, setTab] = useState('storage')
  const { data: density = 'comfortable' } = useDisplayDensityQuery()
  const setDensity = useSetDisplayDensity()
  return (
    <PageContainer size="narrow">
      <PageHeader
        title="Settings"
        description="Configure how you would like to use Better Blood. These settings are only saved to your browser."
      />
      <Col gap="1rem">
        <Col gap="0.5rem">
          <PillSelect<DisplayDensity>
            label="Display density"
            options={[
              { label: 'Comfortable', value: 'comfortable' },
              { label: 'Compact', value: 'compact' },
            ]}
            value={[density]}
            onChange={(v) => v[0] && setDensity(v[0])}
          />
          <span className="Settings-hint">
            Compact reduces padding in tables and cards for more content on screen.
          </span>
        </Col>
        <TabGroup
          options={[
            { label: 'Data Storage', value: 'storage' },
            { label: 'AI & LLMs', value: 'ai' },
          ]}
          setValue={setTab}
          value={tab}
        />
        {tab === 'ai' && <AISettings />}
        {tab === 'storage' && <DataStorageSettings />}
      </Col>
    </PageContainer>
  )
}
export default Settings
