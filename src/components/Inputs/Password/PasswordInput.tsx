// import library functionality
import { useId, useRef, useState } from 'react';

// import icon
import Icon from '../../../components/Icon/Icon';
import useClickOutside from '../../../hooks/useClickOutside';

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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function PasswordInput(props: ComponentProps) {

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
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const inputId = id ?? useId();
  const passwordRef = useRef<HTMLDivElement>(null);
  const classes = `guwmi-password-input${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`;
  const [type, setType] = useState<'text' | 'password'>('password');
  const toggleType = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password')
    }
  }
  useClickOutside( type === 'text', toggleType, passwordRef );

  return (
    <div className={classes} {...rest} ref={passwordRef}>
      <label htmlFor={inputId} className={hideLabel ? 'guwmi-sr-only' : null}>{label}</label>
      <div className="guwmi-password-container">
        <input
          type={type}
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
        <button onClick={() => toggleType()} aria-label={type === 'password' ? 'Show password' : 'Hide password'}>
          { type === 'password' ? <Icon name="view" /> : <Icon name="hide" /> }
          
        </button>
      </div>
      {hasError &&
        <span>{error}</span>
      }
    </div>
  )
}