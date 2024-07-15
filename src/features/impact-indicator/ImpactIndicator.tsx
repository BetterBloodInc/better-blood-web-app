import React from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Row } from '~src/library/Row'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Overline } from '~src/library/text/Overline'
import './ImpactIndicator.scss'

export const ImpactIndicator = ({
  icon,
  impact,
  label,
}: {
  icon: IconProp
  impact: 'low' | 'med' | 'high'
  label: string
}) => {
  return (
    <Row className="impact-indicator">
      <div className="impact-indicator-icon">
        <FontAwesomeIcon icon={icon} style={{ fontSize: 12 }} />
      </div>
      <div style={{width: 80}}>{label}</div>
      <Row style={{ gap: '0.25rem', flexGrow: 0 }}>
        {impact === 'low' && (
          <>
            <ImpactLevel type="low" />
            <ImpactLevel />
            <ImpactLevel />
          </>
        )}
        {impact === 'med' && (
          <>
            <ImpactLevel type="med" />
            <ImpactLevel type="med" />
            <ImpactLevel />
          </>
        )}
        {impact === 'high' && (
          <>
            <ImpactLevel type="high" />
            <ImpactLevel type="high" />
            <ImpactLevel type="high" />
          </>
        )}
      </Row>
      <Overline>{impact}</Overline>
    </Row>
  )
}
const ImpactLevel = ({ type }: { type?: 'low' | 'med' | 'high' }) => {
  return <div className={`impact-level ${type}`}></div>
}
