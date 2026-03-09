import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MetricSection } from '../../features/MetricSection'
import { BIOMARKERS } from '../../constants/biomarkers'
import { Col } from '../../library/Col'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { BiomarkerId } from '~src/types/biomarker-types'
import { BiomarkerTestSection } from '~src/features/biomarker-test-section/BiomarkerTestSection'
import { BiomarkerInterventionSection } from '~src/features/biomarker-intervention-section/BiomarkerInterventionSection'
import { EditBiomarkerModal } from '~src/modals/edit-biomarker-modal/EditBiomarkerModal'
import { BiomarkerImportanceSection } from '~src/features/biomarker-importance-section/BiomarkerImportanceSection'
import { BiomarkerHistorySection } from '~src/features/biomarker-history-section/BiomarkerHistorySection'
import { BiomarkerAboutSection } from '~src/features/biomarker-about-section/BiomarkerAboutSection'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'
import { Button } from '~src/library/Button'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { useToggleConversationDrawer } from '~src/layout/conversation-drawer/slice'
import './Biomarker.scss'

interface Props {
  biomarkerId: BiomarkerId
}

export const Biomarker: React.FC<Props> = ({ biomarkerId }: Props) => {
  const { data: profile, isFetching } = useActiveProfileQuery()
  const biomarker = BIOMARKERS.find((m) => m.id === biomarkerId)
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  const toggleConversationDrawer = useToggleConversationDrawer()

  useEffect(() => {
    const hash = location.hash
    if (hash) {
      const id = hash.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  if (!biomarker) {
    return <>404</>
  }
  const data =
    profile?.biomarkers[biomarkerId]?.sort(
      (a, b) => a.timestamp - b.timestamp,
    ) ?? []
  return (
    <PageContainer size="full">
      <PageHeader
        title={biomarker.name}
        breadcrumb={
          <>
            <Link to="/biomarkers">Biomarkers</Link>
            <FontAwesomeIcon
              icon={faChevronRight}
              fontSize="12px"
              style={{ margin: '0 4px', opacity: 0.5 }}
            />
            {biomarker.id}
          </>
        }
        actions={
          <>
            <Button
              text="Add measurement"
              preIcon={faPlus}
              onClick={() => toggleAddBloodMetricsModal(true, biomarker.id)}
            />
            <Button
              text="Chat with AI"
              preIcon={faComments}
              onClick={() => toggleConversationDrawer(true)}
            />
          </>
        }
      />
      <BiomarkerAboutSection biomarker={biomarker} />
      <MetricSection metric={biomarker} data={data} />
      <BiomarkerHistorySection metric={biomarker} data={data} />
      <BiomarkerInterventionSection biomarkerId={biomarkerId} />
      <BiomarkerImportanceSection biomarkerId={biomarkerId} />
      <BiomarkerTestSection biomarkerId={biomarkerId} />
      <EditBiomarkerModal />
    </PageContainer>
  )
}

export default Biomarker
