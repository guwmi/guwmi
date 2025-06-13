// import library functionality
import React, { PropsWithChildren } from 'react';

// compoent type
export interface MenuItemProps extends PropsWithChildren {
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
 * Menu Item component *****************************************************************************
 *
 * * If a menu item includes an href and is not disabled, it will render as an anchor element,
 *   otherwise it will render as a button element
 * 
 * @param href - (optional) string value for the href property of a button (link)
 * @param target - (optional) target value of '_blank', '_self', '_parent', or '_top' - only applies to items with an href property
 * @param disabled - (optionsl) boolean value that determines the disabled state of an item
 * @param className - (optional) string value of class names to apply to the component
 * @param onClick - (optional) function to be called onClick
 * 
 */

export default function MenuItem(props: MenuItemProps) {

  const {
    href,
    target,
    disabled,
    className,
    onClick,
    children,
    ...rest
  } = props;
  const classes = `guwmi-menu-item${className ? ' ' + className : ''}`;

  return (
    <li className={classes} {...rest}>
      {href && !disabled ? (
        <a className="guwmi-menu-btn" href={href} target={target}>
          {children}
        </a>
      ) : (
        <button className="guwmi-menu-btn" onClick={onClick} disabled={disabled}>
          {children}
        </button>
      )}
    </li>
  )
}