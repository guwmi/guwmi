// import library functionality
import { useId } from 'react';

// import components
import Icon from '../../../components/Icon/Icon';

// component type
interface ComponentProps {
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

export default function SelectInput(props: ComponentProps) {

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
          disabled={disabled}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        >
          {options && options.map((option, index) => (
            <option key={`${id}-${index}`} value={option.value} disabled={option.disabled}>{option.name}</option>
          ))}
        </select>
        <span className="guwmi-select-icon">
          <Icon name="chevron-down" size={20} />
        </span>
      </div>
      {hasError &&
        <span className="guwmi-select-error">{error}</span>
      }
    </div>
  )
}