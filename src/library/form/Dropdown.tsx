import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useDarkModeSelector } from '~src/theme-slice'
import './Dropdown.scss'

export interface DropdownProps {
  name: string
  label?: string
  value: any
  options: DropdownOption[]
  onSelect?(item: DropdownOption): void
  disabled?: boolean
  multiple?: boolean
  isClearable?: boolean
  formatOptionLabel?: (data: any, formatOptionLabelMeta: any) => React.ReactNode
  placeholder?: string
}

export type DropdownOption = {
  label: string
  value: any
}

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  label,
  value,
  options,
  onSelect,
  disabled,
  multiple,
  isClearable,
  formatOptionLabel,
  placeholder,
}) => {
  const isDarkMode = useDarkModeSelector()
  const [target, setTarget] = useState<HTMLElement | null>(null)
  useEffect(() => {
    setTarget(document.body)
  }, [])
  const onChange = (value: any) => {
    onSelect?.(value)
  }
  return (
    <div className={`drop-down ${disabled ? 'disabled' : ''}`}>
      {label && <label>{label}</label>}
      <Select
        menuPortalTarget={target}
        name={name}
        id={name}
        onChange={onChange}
        isDisabled={disabled}
        isMulti={multiple}
        options={options}
        isClearable={isClearable}
        formatOptionLabel={formatOptionLabel}
        value={value}
        placeholder={placeholder || ''}
        styles={{
          menuPortal: (base) => ({ ...base, zIndex: 9999 }),
          control: (provided) => ({
            ...provided,
            backgroundColor: isDarkMode ? 'rgba(255,255,255,0.075)' : undefined,
            border: 0,
            boxShadow: isDarkMode
              ? undefined
              : 'inset 0 0 0 1px rgba(0,0,0,0.1)',
            borderRadius: 4,
            transition: '0.3s',
            ':hover': {
              borderColor: 'none',
              backgroundColor: isDarkMode
                ? 'rgba(255,255,255,0.1)'
                : 'rgba(0,0,0,0.1)',
            },
            ':focus-within': {
              borderColor: 'none',
              boxShadow: `inset 0 0 0 2px #4D9`,
              backgroundColor: '#4d92',
            },
          }),
          input: (provided) => ({
            ...provided,
            paddingTop: label ? '2rem' : 6,
            paddingBottom: 12,
            paddingLeft: 6,
            paddingRight: 6,
            color: 'white',
            boxShadow: 'none',
          }),
          indicatorSeparator: (provided) => ({
            ...provided,
            backgroundColor: isDarkMode
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(0,0,0,0.1)',
          }),
          singleValue: (provided, state) => ({
            ...provided,
            color: isDarkMode ? 'white' : 'black',
            paddingTop: label ? '2rem' : 6,
            paddingBottom: 12,
            paddingLeft: 6,
            paddingRight: 6,
          }),
          placeholder: (provided) => ({
            ...provided,
            paddingTop: label ? '2rem' : 6,
            paddingBottom: 6,
            paddingLeft: 6,
            paddingRight: 6,
          }),
          menu: (provided) => ({
            ...provided,
            backgroundColor: '#2A2A2A',
            boxShadow: `0 0 0 1px #333`,
            overflow: 'hidden',
          }),
          option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#4D9A' : '#2A2A2A',
            color: state.isFocused ? '#FFF' : '#FFFA',
            fontFamily: 'Poppins, sans-serif',
          }),
        }}
      />
    </div>
  )
}
