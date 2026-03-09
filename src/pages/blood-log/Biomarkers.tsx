import React from 'react'
import { BiomarkerTable } from '~src/features/biomarker-table/BiomarkerTable'
import { useResponsive } from '~src/hooks/useResponsive'
import { BiomarkerList } from '~src/features/biomarker-list/BiomarkerList'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'
import { Button } from '~src/library/Button'
import { IconButton } from '~src/library/IconButton'
import { Row } from '~src/library/Row'
import { faFileUpload, faPlus, faList, faTable } from '@fortawesome/free-solid-svg-icons'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { useToggleUploadFileModal } from '~src/modals/upload-file-modal/slice'
import {
  useBiomarkersViewQuery,
  useSetBiomarkersView,
} from '~src/api/settings-api'
import './Biomarkers.scss'

export const Biomarkers: React.FC = () => {
  const breakpoint = useResponsive()
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  const toggleUploadFileModal = useToggleUploadFileModal()
  const { data: view = 'table' } = useBiomarkersViewQuery()
  const setView = useSetBiomarkersView()
  const isDesktop = breakpoint !== 'mobile'
  const showTable = isDesktop && view === 'table'
  const showList = !isDesktop || view === 'list'
  return (
    <PageContainer size="full">
      <PageHeader
        title="Biomarkers"
        description="Track and analyze your blood biomarker results. Add measurements manually or import from a file."
        actions={
          <Row gap="0.5rem" style={{ alignItems: 'center' }}>
            {isDesktop && (
              <Row gap="0" className="Biomarkers-viewToggle" role="group" aria-label="View">
                <span className={view === 'table' ? 'Biomarkers-viewOption is-active' : 'Biomarkers-viewOption'}>
                  <IconButton
                    tooltip="Table view"
                    icon={faTable}
                    onClick={() => setView('table')}
                  />
                </span>
                <span className={view === 'list' ? 'Biomarkers-viewOption is-active' : 'Biomarkers-viewOption'}>
                  <IconButton
                    tooltip="List view"
                    icon={faList}
                    onClick={() => setView('list')}
                  />
                </span>
              </Row>
            )}
            <Button
              text="Import results"
              preIcon={faFileUpload}
              onClick={() => toggleUploadFileModal(true)}
            />
            <Button
              text="Add measurement"
              preIcon={faPlus}
              onClick={() => toggleAddBloodMetricsModal(true)}
            />
          </Row>
        }
      />
      {showList && <BiomarkerList />}
      {showTable && <BiomarkerTable />}
    </PageContainer>
  )
}

export default Biomarkers
