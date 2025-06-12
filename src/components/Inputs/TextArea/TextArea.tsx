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
  skeleton?: boolean;
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
    skeleton,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const inputId = id ?? useId();
  const classes = `guwmi-textarea${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`

  return (
    <div className={classes} {...rest}>
      <label htmlFor={inputId} className={skeleton && !hideLabel ? 'guwmi-skeleton' : hideLabel ? 'guwmi-sr-only' : null}>{label}</label>
      <div className={`guwmi-textarea-container${skeleton ? ' guwmi-skeleton' : ''}`}>
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
      </div>
      {hasError &&
        <span>{error}</span>
      }
    </div>
  )
}