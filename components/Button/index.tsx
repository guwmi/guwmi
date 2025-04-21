// import library functionality
import React, { PropsWithChildren, useMemo } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'primary-light' | 'secondary' | 'secondary-light' | 'black' | 'white' | 'gray';
  kind?: 'fill' | 'outline' | 'ghost';
  style?: 'square' | 'round' | 'pill';
  className?: string;
}

export default function Button(props: ComponentProps) {

  const {
    children,
    size = 'md',
    color = 'primary',
    kind = 'fill',
    style = 'round',
    className
  } = props;
  const classes = useMemo(() => `guwmi-btn ${size} ${color} ${kind} ${style}${className ? className : ''}`, []);

  return (
    <button className={classes}>{children}</button>
  )
}