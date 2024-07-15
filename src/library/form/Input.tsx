import React, {
  useRef,
  useState,
  forwardRef,
  HTMLAttributes,
  DetailedHTMLProps,
} from 'react'
import { Row } from '../Row'
import './Input.scss'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: 'text' | 'number' | 'password'
  label?: string
  rules?: any
  style?: any
  error?: boolean
  disabled?: boolean
  showLengthTracker?: boolean
  maxLength?: number
  value: string | undefined
  multiline?: boolean
  placeholder?: string
  onChangeValue(val: string | number | undefined): void
  prefixIcon?: IconProp
  suffix?: string;
}

export const Input = forwardRef(
  (
    {
      type,
      label,
      showLengthTracker = true,
      maxLength,
      disabled,
      error,
      value,
      onChangeValue,
      placeholder,
      style,
      prefixIcon,
      suffix,
      className,
    }: Props,
    ref,
  ) => {
    const textInput = useRef<any>(null)

    const [hasFocus, setHasFocus] = useState(false)
    const containerClassName = `InputContainer ${disabled ? 'Disabled' : ''} ${hasFocus ? 'Focused' : ''} ${error ? 'Error' : ''} ${prefixIcon ? 'WithIcon' : ''} ${className}`
    return (
      <div
        className={containerClassName}
        onClick={() => {
          if (!disabled) {
            textInput.current?.focus()
          }
        }}
      >
        {((hasFocus && !disabled && maxLength && showLengthTracker) ||
          label) && (
          <div className="InputHeader">
            {label?.length && <label>{label}</label>}
            {hasFocus && !disabled && maxLength && (
              <Row style={{ justifyContent: 'flex-end' }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>
                  {value?.length || 0}
                </div>
                <div style={{ fontSize: 12, opacity: 0.5 }}> / {maxLength}</div>
              </Row>
            )}
          </div>
        )}
        {prefixIcon && (
          <div className="InputIcon">
            <FontAwesomeIcon icon={prefixIcon} />
          </div>
        )}
        <input
          ref={textInput}
          className={error ? 'InputError' : 'Input'}
          type={type}
          onChange={(e) =>
            onChangeValue(
              type === 'number' ? e.target.valueAsNumber : e.target.value,
            )
          }
          placeholder={placeholder}
          maxLength={maxLength}
          onBlur={() => {
            setHasFocus(false)
          }}
          onFocus={() => setHasFocus(true)}
          disabled={disabled}
          value={value}
          style={style}
        />
        {suffix && <div className="InputSuffix">{suffix}</div>}
      </div>
    )
  },
)
