// import library functionality
import React, { useRef, PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  active?: boolean;
  href?: string;
  target?:
  | '_blank'
  | '_self'
  | '_parent'
  | '_top';
  disabled?: boolean;
  className?: string;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
}

/**
 * Navbar Item component ********************************************************************
 * 
 * * If a item includes an href and is not disabled, it will render as an anchor element,
 *   otherwise it will render as a button element
 * 
 * @param active - (optional) boolean value for whether the item should be displayed as active
 * @param href - (optional) string value for the href property of a link
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to items with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of an item
 * @param className - (optional) string value of class names to apply to the component
 * @param onClick - (optional) function to be called onClick
 * 
 */

export default function NavbarItem(props: ComponentProps) {

  const {
    active,
    href,
    target,
    disabled,
    className,
    onClick,
    children,
    ...rest
  } = props;
  const classes = `guwmi-navbar-item${active ? ' active' : ''}${className ? ' ' + className : ''}`;
  const button = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <li className={classes} {...rest}>
      {href && !disabled ? (
        <a className="guwmi-navbar-button" href={href} target={target}>
          {children}
        </a>
      ) : (
        <button className="guwmi-navbar-button" onClick={(e) => handleClick(e)} ref={button} disabled={disabled}>
          {children}
        </button>
      )}
    </li>
  )
}