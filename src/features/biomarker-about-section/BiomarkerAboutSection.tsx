import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { BIOMARKER_RANGE_SOURCES } from '~src/constants/biomarker-ranges'
import { Button } from '~src/library/Button'
import { Col } from '~src/library/Col'
import { Row } from '~src/library/Row'
import { Overline } from '~src/library/text/Overline'
import {
  AgeRange,
  Biomarker,
  Ethnicity,
  Gender,
} from '~src/types/biomarker-types'
import { getMinMaxForMetric } from '~src/utils/utils'

const GENDER_MAP = {
  Male: 'men',
  Female: 'women',
  Other: 'all',
}

export function BiomarkerAboutSection({ biomarker }: { biomarker: Biomarker }) {
  const { data: profile, isFetching } = useActiveProfileQuery()
  const {
    min,
    max,
    sourceId,
    referencedAgeRange,
    referencedEthnicity,
    referencedGender,
  } = getMinMaxForMetric(biomarker.id, profile?.demographic)
  const source = sourceId ? BIOMARKER_RANGE_SOURCES[sourceId] : null
  return (
    <Col style={{ gap: '1rem', alignItems: 'flex-start' }}>
      <Col gap="0.5rem">
        <h3>
          What is <span className="biomarker-name">{biomarker.name}</span>?
        </h3>
      </Col>
      <Row gap="1rem" fullWidth>
        <Col
          className="card-secondary"
          style={{ gap: '0.5rem', width: '100%' }}
        >
          <Overline>
            {biomarker.classification ?? biomarker.categories.join(', ')}
          </Overline>
          <p style={{ lineHeight: 1.5 }}>{biomarker.description}</p>
          <Row>
            {biomarker.wikipedia && (
              <a
                href={biomarker.wikipedia}
                style={{ fontSize: 16 }}
                target="_blank"
              >
                Wikipedia{' '}
                <FontAwesomeIcon
                  icon={faExternalLink}
                  style={{ fontSize: 12 }}
                />
              </a>
            )}
          </Row>
        </Col>
        <Col
          className="card-secondary"
          style={{ gap: '0.5rem', width: '100%' }}
        >
          <Overline>Optimal range</Overline>
          <div style={{ fontSize: 20, marginTop: 4 }}>
            {min ? (max ? `${min} - ${max}` : `> ${min}`) : `< ${max}`}{' '}
            {biomarker.measurementUnit}
          </div>
          <p>
            {formatReferenceText(
              referencedGender,
              referencedAgeRange,
              referencedEthnicity,
            )}
          </p>
          {source?.url && (
            <p>
              Reference range from{' '}
              <a href={source.url} style={{ fontSize: 16 }}>
                {source.name} <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </p>
          )}
        </Col>
      </Row>
    </Col>
  )
}

function formatReferenceText(
  referencedGender: Gender | undefined | null,
  referencedAgeRange: AgeRange | undefined | null,
  referencedEthnicity: Ethnicity | undefined | null,
) {
  if (
    referencedGender &&
    referencedGender !== Gender.Other &&
    referencedAgeRange &&
    referencedAgeRange !== AgeRange.Unknown &&
    referencedEthnicity &&
    referencedEthnicity !== Ethnicity.Other
  ) {
    return `This is the optimal range for ${referencedEthnicity?.toLowerCase()} ${GENDER_MAP[referencedGender]} in their ${referencedAgeRange}.`
  }
  if (
    referencedGender &&
    referencedGender !== Gender.Other &&
    referencedAgeRange &&
    referencedAgeRange !== AgeRange.Unknown
  ) {
    return `This is the optimal range for ${GENDER_MAP[referencedGender]} in their ${referencedAgeRange}.`
  }
  if (
    referencedGender &&
    referencedGender !== Gender.Other &&
    referencedEthnicity &&
    referencedEthnicity !== Ethnicity.Other
  ) {
    return `This is the optimal range for ${referencedEthnicity?.toLowerCase()} ${GENDER_MAP[referencedGender]}.`
  }
  if (
    referencedAgeRange &&
    referencedAgeRange !== AgeRange.Unknown &&
    referencedEthnicity &&
    referencedEthnicity !== Ethnicity.Other
  ) {
    return `This is the optimal range for ${referencedEthnicity.toLowerCase()}s in their ${referencedAgeRange}.`
  }
  if (referencedGender && referencedGender !== Gender.Other) {
    return `This is the optimal range for ${GENDER_MAP[referencedGender]}.`
  }
  if (referencedAgeRange && referencedAgeRange !== AgeRange.Unknown) {
    return `This is the optimal range for all individuals in their ${referencedAgeRange}.`
  }
  return 'This is the optimal range for all individuals.'
}
