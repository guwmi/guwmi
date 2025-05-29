// import library functionality
import React, { useMemo, PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'neutral' | 'primary' | 'secondary' | 'danger';
  variant?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'pill';
  className?: string;
}

interface ChildButton {
  size?: 'sm' | 'md' | 'lg';
  color?: 'neutral' | 'primary' | 'secondary' | 'danger';
  variant?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'pill';
  className?: string;
}

export default function ButtonGroup(props: ComponentProps) {

  const {
    children,
    size = 'md',
    color = 'neutral',
    variant = 'fill',
    theme = 'round',
    className,
    ...rest
  } = props;
  const classes = useMemo(() => `guwmi-btn-group ${size} ${color} ${variant} ${theme}${className ? ' ' + className : ''}`, []);
  const buttonChildren = useMemo(() => React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement<ChildButton>, {
      size: size,
      color: color,
      variant: variant,
      theme: theme,
    });
  }), [children]);

  return (
    <div className={classes} {...rest}>
      {buttonChildren}
    </div>
  )
}