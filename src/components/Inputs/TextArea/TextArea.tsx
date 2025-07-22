// import library functionality
import { useId } from 'react';

// component type
export interface TextAreaProps {
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

/**
 * Textarea component ***********************************************************************
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
 * @param rows - (optional) number value for the rows proprty of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 * 
 */

export default function TextArea(props: TextAreaProps) {

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
  const classes = `guwmi-textarea${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      <label htmlFor={inputId} className={skeleton && !hideLabel ? 'guwmi-skeleton' : hideLabel ? 'guwmi-sr-only' : null}>{label}</label>
      <div className={`guwmi-textarea-container${skeleton ? ' guwmi-skeleton' : ''}`}>
        <textarea
          id={inputId}
          name={name}
          placeholder={placeholder}
          disabled={disabled || skeleton}
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