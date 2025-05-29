// import library functionality
import { useId, useMemo } from 'react';

// component type
interface ComponentProps {
  label: string;
  hideLabel?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  error?: string;
  hasError?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function TextInput(props: ComponentProps) {

  const {
    label,
    hideLabel,
    id,
    name,
    placeholder,
    disabled,
    value,
    readOnly,
    error,
    hasError,
    maxLength,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const inputId = id ?? useId();
  const classes = useMemo(() => `guwmi-text-input${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}`, [hasError, disabled])

  return (
    <div className={classes} {...rest}>
      <label htmlFor={inputId} className={hideLabel ? 'guwmi-sr-only' : null}>{label}</label>
      <input
        type="text"
        id={inputId}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        readOnly={readOnly}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {hasError &&
        <span>{error}</span>
      }
    </div>
  )
}