// import library functionality
import React, { useMemo, PropsWithChildren } from 'react';

// import button (children) type
import { ButtonProps } from '../../components/Button/Button';

// component type
export interface ButtonGroupProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'neutral' | 'primary' | 'secondary' | 'danger';
  variant?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'pill';
  className?: string;
  skeleton?: boolean;
}

/**
 * Button Group component *******************************************************************
 * 
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param color - (optional) color value of 'primary', 'secondary', 'danger', 'neutral' - defaults to 'primary'
 * @param variant - (optional) variant value of 'fill', 'outline', or 'ghost' - defaults to 'fill'
 * @param theme - (optional) theme value of 'square', 'round', or 'pill' - defaults to 'round'
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function ButtonGroup(props: ButtonGroupProps) {

  const {
    size = 'md',
    color = 'neutral',
    variant = 'fill',
    theme = 'round',
    className,
    skeleton,
    children,
    ...rest
  } = props;
  const classes = `guwmi-btn-group ${size} ${color} ${variant} ${theme}${className ? ' ' + className : ''}`;

  const buttonChildren = useMemo(() => React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement<ButtonProps>, {
      size: size,
      color: color,
      variant: variant,
      theme: theme,
      skeleton: skeleton
    });
  }), [children]);

  return (
    <div className={classes} {...rest}>
      {buttonChildren}
    </div>
  )
}