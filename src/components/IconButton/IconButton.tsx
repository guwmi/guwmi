// import library functionality
import React, { PropsWithChildren, useMemo } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
  kind?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'circle';
  className?: string;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  ariaLabel: string;
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
    kind = 'fill',
    theme = 'round',
    className,
    onClick,
    ariaLabel
  } = props;
  const classes = useMemo(() => `guwmi-btn icon ${size} ${color} ${kind} ${theme}${className ? ' ' + className : ''}`, []);

  return (
    <button 
      className={classes} 
      onClick={onClick} 
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}