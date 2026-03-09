import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { Row } from './Row'
import './TabGroup.scss'

interface TabGroupOption<T> {
  label: string
  value: T
  icon?: IconProp
}

export function TabGroup<T>({
  options,
  value,
  setValue,
}: {
  options: TabGroupOption<T>[]
  value: T
  setValue: (val: T) => void
}) {
  return (
    <Row className="tab-group">
      {options.map((option) => (
        <div
          key={option.value?.toString()}
          onClick={() => setValue(option.value)}
          className={value === option.value ? 'active' : ''}
        >
          {option.icon && <FontAwesomeIcon icon={option.icon} />} {option.label}
        </div>
      ))}
    </Row>
  )
}
