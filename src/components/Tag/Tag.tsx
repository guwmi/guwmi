// import library functionality
import { useRef } from 'react';

// component type
interface ComponentProps {
  value: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'neutral';
  className?: string;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  disabled?: boolean;
}

export default function Tag(props: ComponentProps) {

  const {
    value,
    size = 'md',
    variant = 'neutral',
    className,
    onClick = null,
    href,
    target = "_self",
    disabled = false,
    ...rest
  } = props;
  const classes = `guwmi-tag ${size} ${variant}${className ? ' ' + className : ''}`;
  const button = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    href && !disabled ? (
      <a className={classes} href={href} ref={button} target={target} {...rest}>
        {value}
      </a>
    ) : onClick || (href && disabled) ? (
      <button className={classes} onClick={(e) => handleClick(e)} ref={button} disabled={disabled} {...rest}>
        {value}
      </button>
    ) : (
      <span className={classes} {...rest}>
        {value}
      </span>
    )
  )
}