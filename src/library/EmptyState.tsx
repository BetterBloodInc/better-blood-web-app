import React from 'react'
import { Col } from '~src/library/Col'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import './EmptyState.scss'

export function EmptyState({
  icon = faInbox,
  title,
  description,
  action,
}: {
  icon?: IconDefinition
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="EmptyState" role="status">
      <div className="EmptyState-icon" aria-hidden="true">
        <FontAwesomeIcon icon={icon} />
      </div>
      <Col gap="0.5rem" className="EmptyState-content">
        <h3 className="EmptyState-title">{title}</h3>
        {description && (
          <p className="EmptyState-description">{description}</p>
        )}
        {action && <div className="EmptyState-action">{action}</div>}
      </Col>
    </div>
  )
}
