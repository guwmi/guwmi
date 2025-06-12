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
  loading?: boolean;
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
    disabled,
    loading,
    ...rest
  } = props;
  const classes = `guwmi-tag ${size} ${variant}${loading ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;
  const button = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    href && (!disabled || loading) ? (
      <a className={classes} href={href} ref={button} target={target} {...rest}>
        {value}
      </a>
    ) : onClick || (href && disabled) && !loading ? (
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