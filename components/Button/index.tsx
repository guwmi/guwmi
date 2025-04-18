// import library functionality
import React, { PropsWithChildren, useMemo } from 'react';

// import styles
import * as styles from './styles.module.scss';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
}

export default function Button(props: ComponentProps) {

  const { children, size = 'md' } = props;
  const classes = useMemo(() => `${styles.guwmiBtn} ${size}`, []);

  return (
    <button className={classes}>{children}</button>
  )
}