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
  suffix?: string
}

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]) {
  return (node: T | null) => {
    refs.forEach((r) => {
      if (!r) return
      if (typeof r === 'function') r(node)
      else (r as React.MutableRefObject<T | null>).current = node
    })
  }
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
      onKeyDown,
      ...rest
    }: Props,
    ref,
  ) => {
    const textInput = useRef<HTMLInputElement | null>(null)
    const inputRef = mergeRefs(textInput, ref)

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
          ref={inputRef}
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
          onKeyDown={onKeyDown}
          disabled={disabled}
          value={value}
          style={style}
          {...rest}
        />
        {suffix && <div className="InputSuffix">{suffix}</div>}
      </div>
    )
  },
)
