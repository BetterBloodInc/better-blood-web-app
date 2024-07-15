import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './Checkbox.scss'

type Props = {
  id: string
  value: boolean
  onChange(newValue: boolean): void
}

export const Checkbox = ({ id, value, onChange }: Props) => {
  return (
    <div className={value ? 'CheckboxActive' : 'Checkbox'}>
      <input
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor={id}>
        <div>{value && <FontAwesomeIcon icon={faCheck} fontSize={12} />}</div>
      </label>
    </div>
  )
}
