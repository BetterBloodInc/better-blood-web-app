import React from 'react'
import { Col } from './Col'
import { Row } from './Row'
import './PageHeader.scss'

interface PageHeaderProps {
  title: string
  description?: string
  actions?: React.ReactNode
  breadcrumb?: React.ReactNode
}

export function PageHeader({
  title,
  description,
  actions,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <div className="PageHeader">
      {breadcrumb && <div className="PageHeader__breadcrumb">{breadcrumb}</div>}
      <Row className="PageHeader__row">
        <Col>
          <h1>{title}</h1>
          {description && <p className="PageHeader__description">{description}</p>}
        </Col>
        {actions && <Row className="PageHeader__actions" gap="1rem">{actions}</Row>}
      </Row>
    </div>
  )
}
