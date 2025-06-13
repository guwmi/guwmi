// import library functionality
import { useId } from 'react';

// component type
export interface ToggleProps {
  label: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  toggled?: boolean;
  readOnly?: boolean;
  className?: string;
  skeleton?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Toggle component *************************************************************************
 * 
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param toggled - (optional) boolean value fto determine the input toggle state
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 * 
 */

export default function Toggle(props: ToggleProps) {

  const {
    label,
    id,
    name,
    disabled = false,
    value,
    toggled,
    readOnly = false,
    className,
    skeleton,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const classes = `guwmi-toggle${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`;
  const inputId = id ?? useId();

  return (
    <div className={classes} {...rest}>
      <label className={skeleton ? 'guwmi-skeleton' : null} htmlFor={inputId}>{label}</label>
      <div className={`guwmi-toggle-container${skeleton ? ' guwmi-skeleton' : ''}`}>
        <input
          type="checkbox"
          id={inputId}
          name={name ?? label}
          value={value ?? label}
          readOnly={readOnly}
          disabled={disabled || skeleton}
          checked={toggled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
    </div>
  )
}