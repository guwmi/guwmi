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
  rows?: number;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea(props: ComponentProps) {

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
    rows,
    className,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const inputId = id ?? useId();
  const classes = `guwmi-textarea${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`

  return (
    <div className={classes} {...rest}>
      <label htmlFor={inputId} className={hideLabel ? 'guwmi-sr-only' : null}>{label}</label>
      <textarea
        id={inputId}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        readOnly={readOnly}
        maxLength={maxLength}
        rows={rows}
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