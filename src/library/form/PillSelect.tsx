import React from 'react'
import { Row } from '../Row'
import './PillSelect.scss'

type Props<T> = {
  label?: string
  options: { label: string; value: T }[]
  value: T[]
  onChange: (selectedValues: T[]) => void
  isMulti?: boolean
}

export function PillSelect<T>({
  label,
  options,
  value,
  onChange,
  isMulti,
}: Props<T>) {
  return (
    <div className={`pill-select ${label ? 'with-label' : ''}`}>
      {label && (
        <div className="InputHeader">
          <label>{label}</label>
        </div>
      )}
      <Row className="options">
        {options.map((option) => (
          <div
            className={`pill ${value.includes(option.value) ? 'selected' : ''}`}
            key={JSON.stringify(option.value)}
            onClick={() => {
              isMulti
                ? onChange(
                    value.includes(option.value)
                      ? value.filter((v) => v !== option.value)
                      : [...value, option.value],
                  )
                : onChange([option.value])
            }}
          >
            {option.label}
          </div>
        ))}
      </Row>
    </div>
  )
}
