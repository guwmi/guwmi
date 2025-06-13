// import library functionality
import { useId } from 'react';

// import component
import Icon from '../../../components/Icon/Icon';

// component type
export interface CheckboxProps {
  label: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  className?: string;
  skeleton?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Checkbox component ***********************************************************************
 * 
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 * 
 */

export default function Checkbox(props: CheckboxProps) {

  const {
    label,
    id,
    name,
    disabled,
    value,
    readOnly,
    className,
    skeleton,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const classes = `guwmi-checkbox-input${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`;
  const inputId = id ?? useId();

  return (
    <div className={classes} {...rest}>
      <div className={`guwmi-checkbox-container${skeleton ? ' guwmi-skeleton' : ''}`}>
        <span className="guwmi-checkmark">
          <Icon name="check" size={15} stroke="3" />
        </span>
        <input
          type="checkbox"
          id={inputId}
          name={name ?? label}
          value={value ?? label}
          readOnly={readOnly}
          disabled={disabled || skeleton}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
      <label className={skeleton ? 'guwmi-skeleton' : null} htmlFor={inputId}>{label}</label>
    </div>
  )
}