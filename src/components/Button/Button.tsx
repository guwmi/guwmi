// import library functionality
import React, { useRef, PropsWithChildren } from 'react';

// component type
export interface ButtonProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'danger' | 'neutral';
  variant?: 'fill' | 'outline' | 'ghost';
  theme?: 'square' | 'round' | 'pill';
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  disabled?: boolean;
  className?: string;
  skeleton?: boolean;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
}

/**
 * Button component ********************************************************************************
 * 
 * * If a button includes an href and is not disabled or skeleton, it will render as a anchor element,
 *   otherwise it will render as a button element
 * 
 * @param size - (options) size value of 'sm', 'md', or 'lg' - defaults to 'md'
 * @param color - (optional) color value of 'primary', 'secondary', 'danger', 'neutral' - defaults to 'primary'
 * @param variant - (optional) variant value of 'fill', 'outline', or 'ghost' - defaults to 'fill'
 * @param theme - (optional) theme value of 'square', 'round', or 'pill' - defaults to 'round'
 * @param href - (optional) string value for the href property of a button (link)
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to buttons with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of a link
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * @param onClick - (optional) function to be called onClick
 * 
 */

export default function Button(props: ButtonProps) {

  const {
    size = 'md',
    color = 'primary',
    variant = 'fill',
    theme = 'round',
    href,
    target,
    disabled,
    className,
    skeleton,
    onClick,
    children,
    ...rest
  } = props;
  const classes = `guwmi-btn ${size} ${color} ${variant} ${theme}${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;
  const button = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    href && !disabled && !skeleton ? (
      <a className={classes} href={href} target={target} {...rest}>
        {children}
      </a>
    ) : (
      <button className={classes} onClick={(e) => handleClick(e)} ref={button} disabled={disabled || skeleton} {...rest}>
        {children}
      </button>
    )
  )
}