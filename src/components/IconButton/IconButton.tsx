// import library functionality
import React, { PropsWithChildren } from 'react';

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
  skeleton?: boolean;
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
    disabled,
    skeleton,
    ...rest
  } = props;
  const classes = `guwmi-btn icon ${size} ${color} ${variant} ${theme}${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled || skeleton}
      {...rest}
    >
      {children}
    </button>
  )
}