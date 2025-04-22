// import library functionality
import React, { PropsWithChildren, useMemo } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'black' | 'white' | 'gray';
  kind?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'pill';
  className?: string;
  onClick: (React.MouseEventHandler<HTMLButtonElement> | undefined);
}

export default function Button(props: ComponentProps) {

  const {
    children,
    size = 'md',
    color = 'primary',
    kind = 'fill',
    theme = 'round',
    className,
    onClick
  } = props;
  const classes = useMemo(() => `guwmi-btn ${size} ${color} ${kind} ${theme}${className ? className : ''}`, []);

  return (
    <button className={classes} onClick={onClick}>{children}</button>
  )
}