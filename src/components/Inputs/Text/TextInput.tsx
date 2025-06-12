// import library functionality
import { useId } from 'react';

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
  className?: string;
  skeleton?: boolean;
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
    className,
    skeleton,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const inputId = id ?? useId();
  const classes = `guwmi-text-input${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`

  return (
    <div className={classes} {...rest}>
      <label htmlFor={inputId} className={skeleton && !hideLabel ? 'guwmi-skeleton' : hideLabel ? 'guwmi-sr-only' : null}>{label}</label>
      <div className={`guwmi-text-input-container${skeleton ? ' guwmi-skeleton' : ''}`}>
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
      </div>
      {hasError &&
        <span>{error}</span>
      }
    </div>
  )
}