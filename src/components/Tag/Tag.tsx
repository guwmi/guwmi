// import library functionality
import { useRef } from 'react';

// component type
interface ComponentProps {
  value: string;
  size?: 'sm' | 'md' | 'lg';
  variant?:
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'neutral';
  href?: string;
  target?:
  | '_blank'
  | '_self'
  | '_parent'
  | '_top';
  disabled?: boolean;
  className?: string;
  skeleton?: boolean;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
}

/**
 * Tag component ****************************************************************************
 * 
 * @param value - string value for the text of the tag
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param variant - (optional) color value of 'primary', 'secondary', 'outline', 'neutral' - defaults to 'neutral'
 * @param href - (optional) string value for the href property of a link tag
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to buttons with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of a tag
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onClick - (optional) function to be called onClick
 * 
 */

export default function Tag(props: ComponentProps) {

  const {
    value,
    size = 'md',
    variant = 'neutral',
    href,
    target,
    disabled,
    className,
    skeleton,
    onClick = null,
    ...rest
  } = props;
  const classes = `guwmi-tag ${size} ${variant}${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;
  const button = useRef(null);
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    href && (!disabled || skeleton) ? (
      <a className={classes} href={href} ref={button} target={target} {...rest}>
        {value}
      </a>
    ) : (onClick || disabled) && !skeleton ? (
      <button className={classes} onClick={handleClick} ref={button} disabled={disabled} {...rest}>
        {value}
      </button>
    ) : (
      <span className={classes} {...rest}>
        {value}
      </span>
    )
  )
}