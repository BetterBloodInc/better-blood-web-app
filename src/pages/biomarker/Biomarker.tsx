import React, { useEffect } from 'react'
import { MetricSection } from '../../features/MetricSection'
import { BIOMARKERS } from '../../constants/biomarkers'
import { Col } from '../../library/Col'
import { AddBloodMetricsModal } from '../../modals/add-blood-metrics-modal/AddBloodMetricsModal'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { TopBar } from './TopBar'
import { BiomarkerId } from '~src/types/biomarker-types'
import { BiomarkerTestSection } from '~src/features/biomarker-test-section/BiomarkerTestSection'
import { BiomarkerInterventionSection } from '~src/features/biomarker-intervention-section/BiomarkerInterventionSection'
import { EditBiomarkerModal } from '~src/modals/edit-biomarker-modal/EditBiomarkerModal'
import { BiomarkerImportanceSection } from '~src/features/biomarker-importance-section/BiomarkerImportanceSection'
import { BiomarkerHistorySection } from '~src/features/biomarker-history-section/BiomarkerHistorySection'
import { Fader } from '~src/library/transition/Fader'
import { BiomarkerAboutSection } from '~src/features/biomarker-about-section/BiomarkerAboutSection'
import './Biomarker.scss'

interface Props {
  biomarkerId: BiomarkerId
}

export const Biomarker: React.FC<Props> = ({ biomarkerId }: Props) => {
  const { data: profile, isFetching } = useActiveProfileQuery()
  const biomarker = BIOMARKERS.find((m) => m.id === biomarkerId)

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
    <Fader isVisible>
      <TopBar metric={biomarker} />
      <Col gap="2.5rem">
        <BiomarkerAboutSection biomarker={biomarker} />
        <MetricSection metric={biomarker} data={data} />
        <BiomarkerHistorySection metric={biomarker} data={data} />
        <BiomarkerInterventionSection biomarkerId={biomarkerId} />
        <BiomarkerImportanceSection biomarkerId={biomarkerId} />
        <BiomarkerTestSection biomarkerId={biomarkerId} />
      </Col>
      <AddBloodMetricsModal />
      <EditBiomarkerModal />
    </Fader>
  )
}

export default Biomarker
