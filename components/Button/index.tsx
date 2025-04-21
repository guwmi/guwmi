// import library functionality
import React, { PropsWithChildren, useMemo } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
}

export default function Button(props: ComponentProps) {

  const { children, size = 'md' } = props;
  const classes = useMemo(() => `guwmi-btn ${size}`, []);

  return (
    <button className={classes}>{children}</button>
  )
}