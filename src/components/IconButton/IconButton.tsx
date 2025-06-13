// import library functionality
import React, { PropsWithChildren } from 'react';

// component type
export interface IconButtonProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger';
  variant?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'circle';
  ariaLabel: string;
  disabled?: boolean;
  className?: string;
  skeleton?: boolean;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
}

/**
 * Icon Button component ********************************************************************
 * 
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param color - (optional) color value of 'primary', 'secondary', or 'danger' - defaults to 'primary'
 * @param variant - (optional) variant value of 'fill', 'outline', or 'ghost' - defaults to 'fill'
 * @param theme - (optional) theme value of 'square', 'round', or 'pill' - defaults to 'round'
 * @param ariaLabel - string value for the aria-label property of the <button>> element
 * @param disabled - (optionsl) boolean value that determines the disabled state of a link
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onClick - (optional) function to be called onClick
 * 
 */

export default function IconButton(props: IconButtonProps) {

  const {
    size = 'md',
    color = 'primary',
    variant = 'fill',
    theme = 'round',
    ariaLabel,
    disabled,
    className,
    skeleton,
    onClick,
    children,
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