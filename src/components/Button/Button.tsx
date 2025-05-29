// import library functionality
import React, {
  useCallback,
  useMemo,
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
    disabled = false,
    ...rest
  } = props;
  const classes = useMemo(() => `guwmi-btn ${size} ${color} ${variant} ${theme}${className ? ' ' + className : ''}`, []);
  const button = useRef(null);
  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  }, [href, onClick, button.current])

  return (
    href && !disabled ? (
      <a className={classes} href={href} target={target} ref={button} {...rest}>
        {children}
      </a>
    ) : (
      <button className={classes} onClick={(e) => handleClick(e)} ref={button} disabled={disabled} {...rest}>
        {children}
      </button>
    )
  )
}