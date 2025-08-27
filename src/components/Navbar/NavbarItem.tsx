// import library functionality
import React, { useRef, useMemo, PropsWithChildren } from 'react';

// component type
export interface NavbarItemProps extends PropsWithChildren {
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
  children: React.ReactElement | string | number;
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

export default function NavbarItem(props: NavbarItemProps) {

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
  const buttonClasses = `guwmi-navbar-button${disabled ? ' disabled' : ''}`;
  const button = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };

  const isElement = useMemo(() => {
    let valid = false;
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        valid = true;
      }
    });
    return valid;
  }, [children])

  const mappedChildren = useMemo(() => {
    if (!href && !onClick && disabled) {
      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) { 
          return React.cloneElement(child as React.ReactElement<HTMLAnchorElement>, { tabIndex: -1, href: '' })
        } else {
          return child;
        }
      })
    } else {
      return children;
    }
  }, [children, href, onClick, disabled])

  return (
    <li className={classes} {...rest}>
      {isElement && !disabled ? (
        <div className={buttonClasses}>
          {mappedChildren}
        </div>
      ) : href && !disabled ? (
        <a className={buttonClasses} href={href} target={target}>
          {mappedChildren}
        </a>
      ) : (
        <button className={buttonClasses} onClick={(e) => handleClick(e)} ref={button} disabled={disabled}>
          {mappedChildren}
        </button>
      )}
    </li>
  )
}