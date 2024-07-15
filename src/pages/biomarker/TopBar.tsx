import React from 'react'
import { Row } from '~src/library/Row'
import {
  faCaretRight,
  faChevronRight,
  faPlus,
} from '@fortawesome/free-solid-svg-icons'
import { Button } from '~src/library/Button'
import { useToggleAddBloodMetricsModal } from '~src/modals/add-blood-metrics-modal/slice'
import { Col } from '~src/library/Col'
import { Biomarker } from '~src/types/biomarker-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-regular-svg-icons'
import { useToggleConversationDrawer } from '~src/layout/conversation-drawer/slice'
import './TopBar.scss'

export function TopBar({ metric }: { metric: Biomarker }) {
  const toggleAddBloodMetricsModal = useToggleAddBloodMetricsModal()
  const toggleConversationDrawer = useToggleConversationDrawer()
  return (
    <Col className="top-bar">
      <Row
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <Col gap="1rem">
          <Row gap="0.25rem" style={{ alignItems: 'center' }}>
            <a href="/biomarkers">Biomarkers</a>
            <FontAwesomeIcon
              icon={faChevronRight}
              fontSize="12px"
              style={{ margin: '0 4px', opacity: 0.5 }}
            />
            {metric.id}
          </Row>
          <h1>{metric.name}</h1>
        </Col>
        <Row gap="1rem">
          <Button
            text="Add measurement"
            preIcon={faPlus}
            onClick={() => toggleAddBloodMetricsModal(true, metric.id)}
          />
          <Button
            text="Chat with AI"
            preIcon={faComments}
            onClick={() => toggleConversationDrawer(true)}
          />
        </Row>
      </Row>
    </Col>
  )
}
