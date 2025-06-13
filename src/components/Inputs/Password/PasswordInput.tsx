// import library functionality
import { useId, useRef, useState } from 'react';

// import custom functionality
import useClickOutside from '../../../hooks/useClickOutside';

// import components
import Icon from '../../../components/Icon/Icon';

// component type
export interface PasswordInputProps {
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

/**
 * Password input component *****************************************************************
 * 
 * @param label - string value for the input label
 * @param hideLabel - (optional) boolean value that determines if the label is visibly hidden
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param placeholder - (optional) string value for the placholder property on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param maxLength - (optional) number value for the maxLength proprty of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 * 
 */

export default function PasswordInput(props: PasswordInputProps) {

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
      <label htmlFor={inputId} className={skeleton && !hideLabel ? 'guwmi-skeleton' : hideLabel ? 'guwmi-sr-only' : null}>{label}</label>
      <div className={`guwmi-password-container${skeleton ? ' guwmi-skeleton' : ''}`}>
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