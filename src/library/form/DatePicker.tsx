import React from 'react'
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import 'react-datepicker/dist/react-datepicker.css'
import './DatePicker.scss'

export const DatePicker: React.FC<
  { label?: string; style?: React.CSSProperties } & ReactDatePickerProps
> = ({ label, style, ...props }) => {
  return (
    <div className={`date-picker ${label ? 'has-label' : ''}`} style={style}>
      <FontAwesomeIcon icon={faCalendar} />
      {label && <label>{label}</label>}
      <ReactDatePicker {...props} />
    </div>
  )
}
