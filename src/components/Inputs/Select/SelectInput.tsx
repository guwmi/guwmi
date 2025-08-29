// import library functionality
import { useId } from 'react';

// import components
import Icon from '../../../components/Icon/Icon';

// component type
export interface SelectInputProps {
  label: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  error?: string;
  hasError?: boolean;
  className?: string;
  skeleton?: boolean;
  options: { name: string, value: string, disabled?: boolean }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLSelectElement>) => void;
}

/**
 * Select Input component ******************************************************************
 * 
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param options - array of select input option objects:
 *  - name - string value to be displayed for the option
 *  - value - string value for the value property of te option
 *  - disabled - (optional) boolean value to determine the options disabled state
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 * 
 */

export default function SelectInput(props: SelectInputProps) {

  const {
    label,
    id,
    name,
    disabled,
    value,
    error,
    hasError,
    className,
    skeleton,
    options,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const inputId = id ?? useId();
  const classes = `guwmi-select-input${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      <label className={skeleton ? 'guwmi-skeleton' : null} htmlFor={inputId}>{label}</label>
      <div className={`guwmi-select-container${skeleton ? ' guwmi-skeleton' : ''}`}>
        <select
          id={inputId}
          name={name}
          disabled={disabled || skeleton}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          aria-describedby={hasError ? `error-${inputId}` : undefined}
        >
          {options && options.map((option) => (
            <option key={`${inputId}-${option.value}`} value={option.value} disabled={option.disabled || skeleton}>{option.name}</option>
          ))}
        </select>
        <span className="guwmi-select-icon">
          <Icon name="chevron-down" size={20} />
        </span>
      </div>
      {hasError &&
        <span id={`error-${inputId}`} className="guwmi-select-error">{error}</span>
      }
    </div>
  )
}