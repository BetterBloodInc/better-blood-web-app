import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Col } from '~src/library/Col'
import { Card } from '~src/library/Card'
import { Row } from '~src/library/Row'
import { Button } from '~src/library/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBarChart,
  faFileUpload,
  faPlus,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { BIOMARKERS } from '~src/constants/biomarkers'
import { MetricChip } from '~src/features/MetricChip'
import { BiomarkerStatus } from '~src/features/biomarker-status/BiomarkerStatus'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { PageContainer } from '~src/library/PageContainer'
import { PageHeader } from '~src/library/PageHeader'
import { EmptyState } from '~src/library/EmptyState'
import { Skeleton } from '~src/library/transition/Skeleton'
import { getMinMaxForMetric } from '~src/utils/utils'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { useToggleUploadFileModal } from '~src/modals/upload-file-modal/slice'
import { useToggleConversationDrawer } from '~src/layout/conversation-drawer/slice'
import { BiomarkerId } from '~src/types/biomarker-types'
import { sortByTimestampInReverseChronologicalOrder } from '~src/utils/date'
import './Home.scss'

type HealthStatus = 'good' | 'bad' | 'unknown'

function getStatusForValue(
  biomarkerId: BiomarkerId,
  value: number,
  profile: { demographic?: any; referenceRanges?: any } | null,
): HealthStatus {
  const custom = profile?.referenceRanges?.[biomarkerId]
  const { min, max } = getMinMaxForMetric(biomarkerId, profile?.demographic, custom)
  if (min === 0 && max === 0) return 'unknown'
  if (value < min || value > max) return 'bad'
  return 'good'
}

export const Home: React.FC = () => {
  const { data: profile, isLoading, isError, refetch } = useActiveProfileQuery()
  const toggleAddMeasurement = useToggleAddBloodMetricsModal()
  const toggleUpload = useToggleUploadFileModal()
  const toggleChat = useToggleConversationDrawer()

  const { recentMeasurements, healthSummary, hasAnyData } = useMemo(() => {
    const biomarkers = profile?.biomarkers ?? {}
    const flat: Array<{
      biomarkerId: BiomarkerId
      timestamp: number
      value: number
      name: string
    }> = []
    Object.entries(biomarkers).forEach(([id, arr]) => {
      if (!arr?.length) return
      const meta = BIOMARKERS.find((b) => b.id === id)
      arr.forEach((m) => {
        flat.push({
          biomarkerId: id as BiomarkerId,
          timestamp: m.timestamp,
          value: m.value,
          name: meta?.name ?? id,
        })
      })
    })
    flat.sort((a, b) => b.timestamp - a.timestamp)
    const recent = flat.slice(0, 5)

    let good = 0
    let bad = 0
    BIOMARKERS.forEach((b) => {
      const arr = [...(biomarkers[b.id] ?? [])].sort(
        sortByTimestampInReverseChronologicalOrder,
      )
      const latest = arr[0]
      if (!latest) return
      const status = getStatusForValue(b.id, latest.value, profile ?? null)
      if (status === 'good') good += 1
      else if (status === 'bad') bad += 1
    })

    const hasAnyData = flat.length > 0
    return {
      recentMeasurements: recent,
      healthSummary: { good, bad },
      hasAnyData,
    }
  }, [profile])

  const userMetrics = useMemo(
    () =>
      BIOMARKERS.filter((m) => (profile?.biomarkers[m.id]?.length ?? 0) > 0),
    [profile],
  )

  if (isLoading) {
    return (
      <PageContainer size="default">
        <PageHeader
          title="Welcome"
          description="Better Blood is a free and private biomarker tracking service."
        />
        <Col style={{ gap: '1rem' }}>
          <Skeleton width="100%" height={120} radius={4} />
          <Skeleton width="100%" height={100} radius={4} />
          <Skeleton width="100%" height={100} radius={4} />
        </Col>
      </PageContainer>
    )
  }

  if (isError) {
    return (
      <PageContainer size="default">
        <PageHeader
          title="Welcome"
          description="Better Blood is a free and private biomarker tracking service."
        />
        <Card>
          <EmptyState
            title="Something went wrong"
            description="We couldn't load your data. Try refreshing the page or check that your browser allows local storage."
            action={
              <Button
                text="Try again"
                onClick={() => refetch()}
              />
            }
          />
        </Card>
      </PageContainer>
    )
  }

  if (!hasAnyData) {
    return (
      <PageContainer size="default">
        <PageHeader
          title="Welcome"
          description="Better Blood is a free and private biomarker tracking service. Any information provided is not a substitute for professional medical advice, diagnosis, or treatment."
        />
        <Card className="Home-onboarding">
          <EmptyState
            icon={faBarChart}
            title="Get started"
            description="Set up your profile and add your first blood measurement to see your dashboard and track trends over time."
            action={
              <Row gap="0.75rem" style={{ flexWrap: 'wrap', justifyContent: 'center' }}>
                <Link to="/profile">
                  <Button text="Set up profile" preIcon={faUserCircle} />
                </Link>
                <Button
                  text="Add measurement"
                  preIcon={faPlus}
                  onClick={() => toggleAddMeasurement(true)}
                />
                <Button
                  text="Import results"
                  preIcon={faFileUpload}
                  onClick={() => toggleUpload(true)}
                />
              </Row>
            }
          />
        </Card>
        <Col style={{ gap: '1rem', marginTop: '1.5rem' }}>
          <Link to="/biomarkers" className="home-card">
            <Card>
              <Row gap="1rem" style={{ alignItems: 'center' }}>
                <FontAwesomeIcon icon={faBarChart} />
                <Col gap="0.5rem">
                  <h3 style={{ fontWeight: 500 }}>Browse biomarkers</h3>
                  <p style={{ margin: 0 }}>
                    Explore all biomarkers and add data when you have results
                  </p>
                </Col>
              </Row>
            </Card>
          </Link>
        </Col>
      </PageContainer>
    )
  }

  return (
    <PageContainer size="default">
      <PageHeader
        title="Welcome"
        description="Better Blood is a free and private biomarker tracking service. Any information provided is not a substitute for professional medical advice, diagnosis, or treatment."
      />
      <Col style={{ gap: '1.5rem' }}>
        <Row gap="0.75rem" style={{ flexWrap: 'wrap' }}>
          <Button
            text="Add measurement"
            preIcon={faPlus}
            onClick={() => toggleAddMeasurement(true)}
          />
          <Button
            text="Import results"
            preIcon={faFileUpload}
            onClick={() => toggleUpload(true)}
          />
          <Button
            text="Chat with AI"
            preIcon={faComments}
            onClick={() => toggleChat(true)}
          />
        </Row>

        {(healthSummary.good > 0 || healthSummary.bad > 0) && (
          <Card className="Home-summary">
            <h3 style={{ margin: 0, marginBottom: '0.75rem', fontWeight: 500 }}>
              At a glance
            </h3>
            <Row gap="1rem" style={{ flexWrap: 'wrap', alignItems: 'center' }}>
              {healthSummary.good > 0 && (
                <Link to="/biomarkers" className="Home-summaryBadge good">
                  <span className="count">{healthSummary.good}</span>
                  <span>in range</span>
                </Link>
              )}
              {healthSummary.bad > 0 && (
                <Link to="/biomarkers" className="Home-summaryBadge bad">
                  <span className="count">{healthSummary.bad}</span>
                  <span>need attention</span>
                </Link>
              )}
            </Row>
          </Card>
        )}

        {recentMeasurements.length > 0 && (
          <Card className="Home-recent">
            <h3 style={{ margin: 0, marginBottom: '0.75rem', fontWeight: 500 }}>
              Recent activity
            </h3>
            <Col gap="0.5rem">
              {recentMeasurements.map((m) => (
                <Link
                  key={`${m.biomarkerId}-${m.timestamp}`}
                  to={`/biomarkers/${m.biomarkerId}`}
                  className="Home-recentRow"
                >
                  <Row gap="0.75rem" style={{ alignItems: 'center', flexWrap: 'wrap' }}>
                    <span className="name">{m.name}</span>
                    <span className="value">{m.value}</span>
                    <BiomarkerStatus biomarkerId={m.biomarkerId} value={m.value} />
                    <span className="date">
                      {new Date(m.timestamp).toLocaleDateString(undefined, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                  </Row>
                </Link>
              ))}
            </Col>
          </Card>
        )}

        <Row gap="1rem" style={{ flexWrap: 'wrap' }}>
          <Link to="/biomarkers" className="home-card" style={{ flex: '1 1 280px' }}>
            <Card>
              <Row gap="1rem" style={{ alignItems: 'center' }}>
                <FontAwesomeIcon icon={faBarChart} />
                <Col gap="0.5rem">
                  <h3 style={{ fontWeight: 500 }}>Biomarkers</h3>
                  <p style={{ margin: 0 }}>
                    View and analyze all your biomarker data
                  </p>
                </Col>
              </Row>
              {userMetrics.length > 0 && (
                <Row gap="0.5rem" style={{ flexWrap: 'wrap', marginTop: '1rem' }}>
                  {userMetrics.slice(0, 8).map((metric) => (
                    <Link key={metric.id} to={`/biomarkers/${metric.id}`}>
                      <MetricChip
                        biomarkerId={metric.id}
                        value={
                          [...(profile?.biomarkers[metric.id] ?? [])]
                            .sort((a, b) => b.timestamp - a.timestamp)[0]?.value ?? 0
                        }
                      />
                    </Link>
                  ))}
                  {userMetrics.length > 8 && (
                    <span style={{ fontSize: 14, opacity: 0.8 }}>
                      +{userMetrics.length - 8} more
                    </span>
                  )}
                </Row>
              )}
            </Card>
          </Link>
          <Link to="/profile" className="home-card" style={{ flex: '1 1 280px' }}>
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
          </Link>
        </Row>
      </Col>
    </PageContainer>
  )
}

export default Home
