import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useActiveProfileQuery } from '~src/api/profiles-api'
import { BIOMARKER_RANGE_SOURCES } from '~src/constants/biomarker-ranges'
import { Button } from '~src/library/Button'
import { Col } from '~src/library/Col'
import { Row } from '~src/library/Row'
import { Overline } from '~src/library/text/Overline'
import { EditBiomarkerReferenceRangeModal } from '~src/modals/edit-biomarker-reference-range-modal/EditBiomarkerReferenceRangeModal'
import { useToggleEditBiomarkerReferenceRangeModal } from '~src/modals/edit-biomarker-reference-range-modal/slice'
import {
  AgeRange,
  Biomarker,
  Ethnicity,
  Gender,
} from '~src/types/biomarker-types'
import { getMinMaxForMetric } from '~src/utils/utils'

import './BiomarkerAboutSection.scss'

const GENDER_MAP = {
  Male: 'men',
  Female: 'women',
  Other: 'all',
}

export function BiomarkerAboutSection({ biomarker }: { biomarker: Biomarker }) {
  const { data: profile, isFetching } = useActiveProfileQuery()
  const customReferenceRange =
    biomarker.id && profile?.referenceRanges?.[biomarker.id]
  const {
    min,
    max,
    sourceId,
    referencedAgeRange,
    referencedEthnicity,
    referencedGender,
  } = getMinMaxForMetric(
    biomarker.id,
    profile?.demographic,
    customReferenceRange,
  )
  const source = sourceId ? BIOMARKER_RANGE_SOURCES[sourceId] : null
  const openModal = useToggleEditBiomarkerReferenceRangeModal()
  return (
    <Col style={{ gap: '1rem', alignItems: 'flex-start' }} className="biomarker-about-section">
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
            {customReferenceRange
              ? 'This is your personally set reference range.'
              : formatReferenceText(
                  referencedGender,
                  referencedAgeRange,
                  referencedEthnicity,
                )}
          </p>
          {source?.url && !customReferenceRange && (
            <p>
              Reference range from{' '}
              <a href={source.url} style={{ fontSize: 16 }}>
                {source.name} <FontAwesomeIcon icon={faExternalLink} />
              </a>
            </p>
          )}
          <Row>
            <Button
              text={
                customReferenceRange ? 'Edit custom range' : 'Set custom range'
              }
              onClick={() => {
                openModal(true, biomarker.id, sourceId, min, max)
              }}
            />
          </Row>
        </Col>
      </Row>
      <EditBiomarkerReferenceRangeModal />
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
