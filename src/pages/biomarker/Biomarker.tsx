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
import { Button } from '~src/library/Button'
import { EditBiomarkerModal } from '~src/modals/edit-biomarker-modal/EditBiomarkerModal'
import { BiomarkerImportanceSection } from '~src/features/biomarker-importance-section/BiomarkerImportanceSection'
import { BiomarkerHistorySection } from '~src/features/biomarker-history-section/BiomarkerHistorySection'
import { getMinMaxForMetric } from '~src/utils/utils'
import './Biomarker.scss'
import { Fader } from '~src/library/transition/Fader'
import { Row } from '~src/library/Row'
import { Overline } from '~src/library/text/Overline'

interface Props {
  biomarkerId: BiomarkerId
}

export const Biomarker: React.FC<Props> = ({ biomarkerId }: Props) => {
  const { data: profile, isFetching } = useActiveProfileQuery()
  const metric = BIOMARKERS.find((m) => m.id === biomarkerId)
  const { min, max } = getMinMaxForMetric(biomarkerId, profile?.demographic)

  useEffect(() => {
    const hash = location.hash
    console.log('hash', hash)
    if (hash) {
      const id = hash.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location])

  if (!metric) {
    return <>404</>
  }
  const data =
    profile?.biomarkers[biomarkerId]?.sort((a, b) => a.timestamp - b.timestamp) ??
    []
  return (
    <Fader isVisible>
      <TopBar metric={metric} />
      <Col gap="2.5rem">
        <MetricSection metric={metric} data={data} />
        <BiomarkerHistorySection metric={metric} data={data} />
        <Col style={{ gap: '1rem', alignItems: 'flex-start' }}>
          <Col gap="0.5rem">
            <h3>
              What is <span className="metric-name">{metric.name}</span>?
            </h3>
          </Col>
          <Col
            className="card-secondary"
            style={{ gap: '0.5rem', flexGrow: 1 }}
          >
            <Overline>
              {metric.classification ?? metric.categories.join(', ')}
            </Overline>
            <p style={{ lineHeight: 1.5 }}>
              {metric.description}
              <br />
              Optimal range:{' '}
              {min ? (max ? `${min} - ${max}` : `> ${min}`) : `< ${max}`}{' '}
              {metric.measurementUnit}
            </p>
            <Row>
              {metric.wikipedia && (
                <Button
                  text="Learn more on Wikipedia"
                  onClick={() => {
                    window.open(metric.wikipedia, '_blank')
                  }}
                />
              )}
            </Row>
          </Col>
        </Col>
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
