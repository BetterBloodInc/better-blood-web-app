import React from 'react'
import { Col } from '../../library/Col'
import { Card } from '~src/library/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarChart, faUserCircle } from '@fortawesome/free-regular-svg-icons'
import { Row } from '~src/library/Row'
import { BIOMARKERS } from '~src/constants/biomarkers'
import { MetricChip } from '~src/features/MetricChip'
import { Fader } from '~src/library/transition/Fader'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import './Home.scss'

export const Home: React.FC = () => {
  const { data, isLoading } = useActiveProfileQuery()
  const userMetrics = BIOMARKERS.filter(
    (metric) => data?.biomarkers[metric.id]?.length,
  )
  return (
    <Fader isVisible>
      <Col style={{ gap: '1rem' }}>
        <Col>
          <h1>Welcome</h1>
          <p>
            Better Blood is a free and private biomarker tracking service.
            <br />
            Any information provided is not a substitute for professional
            medical advice, diagnosis, or treatment.
          </p>
        </Col>
        <a href="/biomarkers" className="home-card">
          <Card>
            <Row gap="1rem" style={{ alignItems: 'center' }}>
              <FontAwesomeIcon icon={faBarChart} />
              <Col gap="0.5rem">
                <h3 style={{ fontWeight: 500 }}>Biomarkers</h3>
                <p style={{ margin: 0 }}>
                  Start analyzing your blood's biomarkers
                </p>
              </Col>
            </Row>
            {!!userMetrics.length && (
              <Row gap="0.5rem" style={{ flexWrap: 'wrap', marginTop: '2rem' }}>
                {userMetrics.map((metric) => (
                  <a key={metric.id} href={`/biomarkers/${metric.id}`}>
                    <MetricChip
                      biomarkerId={metric.id}
                      value={data?.biomarkers[metric.id][0].value ?? 0}
                    />
                  </a>
                ))}
              </Row>
            )}
          </Card>
        </a>
        {/* <a href="/exercise-log" className="home-card">
          <Card>
            <div>Exercise log</div>
            <div style={{ color: '#999' }}>Track your exercise</div>
          </Card>
        </a>
        <a href="/diet-log" className="home-card">
          <Card>
            <div>Diet log</div>
            <div style={{ color: '#999' }}>Track what you eat</div>
          </Card>
        </a> */}
        <a href="/profile" className="home-card">
          <Card>
            <Row gap="1rem" style={{ alignItems: 'center' }}>
              <FontAwesomeIcon icon={faUserCircle} />
              <Col gap="0.5rem">
                <h3 style={{ fontWeight: 500 }}>Profile</h3>
                <p style={{ margin: 0 }}>
                  Set up your profile to get tailored insights
                </p>
              </Col>
            </Row>
          </Card>
        </a>
      </Col>
    </Fader>
  )
}

export default Home
