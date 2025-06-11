// import library functionality
import { useId } from 'react';

// component type
interface ComponentProps {
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
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function RadioGroup(props: ComponentProps) {

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
        disabled={disabled}
      >
        <legend>{label}</legend>
        <div className={`guwmi-radio-container ${layout}`}>
          {options && options.map((option, index) => (
            <div key={`${id}-${index}`} className={option.disabled ? 'disabled' : null}>
              <input
                type="radio"
                name={name ?? label.toLowerCase()}
                id={`${id}-${option.value}`}
                value={option.value}
                disabled={option.disabled}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
              />
              <label htmlFor={`${id}-${option.value}`}>{option.name}</label>
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