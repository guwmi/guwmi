// import library functionality
import React, {
  useCallback,
  useRef,
  PropsWithChildren
} from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger' | 'neutral';
  variant?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'pill';
  className?: string;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  disabled?: boolean;
  loading?: boolean;
}

/**
 * Button Component ********************************************************************************
 * @param ComponentProps
 */

export default function Button(props: ComponentProps) {

  const {
    children,
    size = 'md',
    color = 'primary',
    variant = 'fill',
    theme = 'round',
    className,
    onClick,
    href,
    target = null,
    disabled,
    loading,
    ...rest
  } = props;
  const classes = `guwmi-btn ${size} ${color} ${variant} ${theme}${loading ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;
  const button = useRef(null);
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick, button.current])

  return (
    href && !disabled && !loading ? (
      <a className={classes} href={href} target={target} ref={button} {...rest}>
        {children}
      </a>
    ) : (
      <button className={classes} onClick={(e) => handleClick(e)} ref={button} disabled={disabled || loading} {...rest}>
        {children}
      </button>
    )
  )
}