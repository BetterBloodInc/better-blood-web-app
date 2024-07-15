import React, { useEffect } from 'react'
import { Col } from '../../library/Col'
import { AddBloodMetricsModal } from '../../modals/add-blood-metrics-modal/AddBloodMetricsModal'
import { BiomarkerTable } from '~src/features/biomarker-table/BiomarkerTable'
import { useResponsive } from '~src/hooks/useResponsive'
import { BiomarkerList } from '~src/features/biomarker-list/BiomarkerList'
import { Fader } from '~src/library/transition/Fader'
import './Biomarkers.scss'

export const Biomarkers: React.FC = () => {
  const breakpoint = useResponsive()
  return (
    <>
      <Fader isVisible>
        <Col>
          {breakpoint === 'mobile' && <BiomarkerList />}
          {breakpoint !== 'mobile' && <BiomarkerTable />}
        </Col>
      </Fader>
      <AddBloodMetricsModal />
    </>
  )
}

export default Biomarkers
