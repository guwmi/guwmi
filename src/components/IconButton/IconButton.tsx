// import library functionality
import React, { PropsWithChildren, useMemo } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger';
  variant?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'circle';
  className?: string;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  ariaLabel: string;
  disabled?: boolean;
}

/**
 * Icon Button Component ********************************************************************************
 * @param ComponentProps
 */

export default function IconButton(props: ComponentProps) {

  const {
    children,
    size = 'md',
    color = 'primary',
    variant = 'fill',
    theme = 'round',
    className,
    onClick,
    ariaLabel,
    disabled = false,
    ...rest
  } = props;
  const classes = useMemo(() => `guwmi-btn icon ${size} ${color} ${variant} ${theme}${className ? ' ' + className : ''}`, []);

  return (
    <button
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  )
}