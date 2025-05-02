// import library functionality
import React, { PropsWithChildren, useMemo } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger';
  kind?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'pill';
  className?: string;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
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
    kind = 'fill',
    theme = 'round',
    className,
    onClick,
    href,
    target = null
  } = props;
  const classes = useMemo(() => `guwmi-btn ${size} ${color} ${kind} ${theme}${className ? ' ' + className : ''}`, []);

  return (
    href ? (
      <a className={classes} href={href} target={target}>
        {children}
      </a>
    ) : (
      <button className={classes} onClick={onClick}>
        {children}
      </button>
    )
  )
}