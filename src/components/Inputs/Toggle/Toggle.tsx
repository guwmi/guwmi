// import library functionality
import { useId } from 'react';

// component type
export interface ToggleProps {
  label: string;
  labelAlign?: 'left' | 'right';
  id?: string;
  name?: string;
  disabled?: boolean;
  toggled?: boolean;
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
 * @param labelAlign - (optional) value of 'left' or 'right' determines label placement - defaults to 'left'
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param toggled - (optional) boolean value fto determine the input toggle state
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
    labelAlign = 'left',
    id,
    name,
    disabled,
    toggled,
    className,
    skeleton,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const classes = `guwmi-toggle ${labelAlign}${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`;
  const inputId = id ?? useId();
  const lowerCaseLabel = label.toLowerCase().replaceAll(' ', '-');

  return (
    <div className={classes} {...rest}>
      <label className={skeleton ? 'guwmi-skeleton' : null} htmlFor={inputId}>{label}</label>
      <div className={`guwmi-toggle-container${skeleton ? ' guwmi-skeleton' : ''}`}>
        <input
          type="checkbox"
          id={inputId}
          name={name ?? lowerCaseLabel}
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