// import library functionality
import { useMemo, useId } from 'react';

// component type
interface ComponentProps {
  label?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function Checkbox(props: ComponentProps) {

  const {
    label,
    id,
    name,
    disabled = false,
    value,
    readOnly = false,
    className,
    onChange,
    onBlur,
    onFocus,
    ...rest
  } = props;
  const classes = useMemo(() => `guwmi-checkbox-input${disabled ? ' disabled' : ''}${className ? ' ' + className : ''}`, [className]);
  const inputId = id ?? useId();

  return (
    <div className={classes} {...rest}>
      <div className="guwmi-checkbox-container">
        <input
          type="checkbox"
          id={inputId}
          name={name ?? label}
          value={value ?? label}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        <span className="guwmi-checkmark"></span>
      </div>
      <label htmlFor={inputId}>{label}</label>
    </div>
  )
}