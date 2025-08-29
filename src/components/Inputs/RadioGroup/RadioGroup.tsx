// import library functionality
import { useId } from 'react';

// component type
export interface RadioGroupProps {
  label: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  error?: string;
  hasError?: boolean;
  options: { name: string, value: string, disabled?: boolean }[];
  layout?: 'column' | 'row';
  className?: string;
  skeleton?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Radio Group component ********************************************************************
 * 
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param error - (optional) string vlaue to be displayed if the hasError prop is true
 * @param hasError - (optional) boolean value to determine is the input should show as having an error
 * @param options - array of radio group option objects:
 *  - name - string value to be displayed for the option
 *  - value - string value for the value property of te option
 *  - disabled - (optional) boolean value to determine the options disabled state
 * @param layout - (optional) value of 'column'or 'row' determines the layout of the radio options - defaults to 'column'
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 * 
 */

export default function RadioGroup(props: RadioGroupProps) {

  const {
    label,
    id,
    name,
    disabled,
    value,
    error,
    hasError,
    options,
    layout = 'column',
    className,
    skeleton,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const inputId = id ?? useId();
  const classes = `guwmi-radio-group${hasError ? ' error' : ''}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      <fieldset
        id={inputId}
        name={name}
        disabled={disabled || skeleton}
      >
        <legend className={skeleton ? 'guwmi-skeleton' : null}>{label}</legend>
        <div className={`guwmi-radio-container ${layout}`}>
          {options && options.map((option) => (
            <div key={`${inputId}-${option.value}`} className={skeleton ? 'guwmi-skeleton' : option.disabled ? 'disabled' : null}>
              <input
                type="radio"
                name={name ?? label.toLowerCase()}
                id={`${inputId}-${option.value}`}
                value={option.value}
                disabled={option.disabled || skeleton}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
              />
              <label htmlFor={`${inputId}-${option.value}`}>{option.name}</label>
            </div>
          ))}
        </div>
      </fieldset>
      {hasError &&
        <span>{error}</span>
      }
    </div>
  )
}