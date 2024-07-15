import React from 'react'
import { Row } from '../Row'
import './TagSelect.scss'

type Props<T> = {
  options: { label: string; value: T }[]
  value: T[]
  onChange: (selectedValues: T[]) => void
  isMulti?: boolean
}

export function TagSelect<T>({ options, value, onChange, isMulti }: Props<T>) {
  return (
    <div className={`tag-select`}>
      <Row className="options">
        {options.map((option) => (
          <Tag
            key={JSON.stringify(option.value)}
            isSelected={value.includes(option.value)}
            onClick={() => {
              isMulti
                ? onChange(
                    value.includes(option.value)
                      ? value.filter((v) => v !== option.value)
                      : [...value, option.value],
                  )
                : onChange([option.value])
            }}
            label={option.label}
          />
        ))}
      </Row>
    </div>
  )
}

export function Tag<T>({
  label,
  isSelected,
  onClick,
}: {
  label: string
  onClick: () => void
  isSelected?: boolean
}) {
  return (
    <div className={`tag ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      {label}
    </div>
  )
}
