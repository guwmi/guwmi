// import library functionality
import { useId } from 'react';

// import components
import Icon from '../../Icon/Icon';

// component type
interface ComponentProps {
  label: string;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function SearchInput(props: ComponentProps) {

  const {
    label,
    id,
    name,
    placeholder,
    disabled,
    value,
    readOnly,
    maxLength,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const searchId = id ?? useId();

  return (
    <div className="guwmi-search-input" {...rest}>
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