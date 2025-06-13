// import library functionality
import { useId } from 'react';

// import components
import Icon from '../../Icon/Icon';

// component type
export interface SearchInputProps {
  label?: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  maxLength?: number;
  className?: string;
  skeleton?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

/**
 * Search Input component *******************************************************************
 * 
 * @param label - string value for the input label
 * @param id - (optional) string value for the id proprty on the input
 * @param name - (optional) string value for the name proprty on the input
 * @param placeholder - (optional) string value for the placholder property on the input
 * @param disabled - (optional) boolean value for the disabled state of the input
 * @param value - (optional) string value for the value proprty on the input
 * @param readOnly - (optional) boolean value for the readOnly state of the input
 * @param maxLength - (optional) number value for the maxLength proprty of the input
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onChange - (optional) function to be called when the input value changes
 * @param onBlur - (optional) function to be called when focus leaves the input
 * @param onFocus - (optional) function to be called when the input recieves focus
 * 
 */

export default function SearchInput(props: SearchInputProps) {

  const {
    label,
    id,
    name,
    placeholder,
    disabled,
    value,
    readOnly,
    maxLength,
    skeleton,
    className,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const classes = `guwmi-search-input${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;
  const searchId = id ?? useId();

  return (
    <div className={classes} {...rest}>
      <span>
        <Icon name="search" size={18} />
      </span>
      <label htmlFor={searchId} className="guwmi-sr-only">{label ?? 'Search'}</label>
      <input
        id={searchId}
        type="search"
        name={name}
        placeholder={placeholder ? placeholder : 'Search...'}
        disabled={disabled}
        value={value}
        readOnly={readOnly}
        maxLength={maxLength}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
    </div>
  )
}