// import library functionality
import React, { PropsWithChildren } from 'react';

// compoent type
interface ComponentProps extends PropsWithChildren {
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  href?: string;
  className?: string;
}

/**
 * Menu Item component *****************************************************************************
 * @param ComponentProps
 */

export default function MenuItem(props: ComponentProps) {

  const {
    onClick,
    href,
    className,
    children,
    ...rest
  } = props;
  const classes = `guwmi-menu-item${className ? ' ' + className : ''}`;

  return (
    <li className={classes}>
      {href ? (
        <a className="guwmi-menu-btn" href={href} {...rest}>
          {children}
        </a>
      ) : (
        <button className="guwmi-menu-btn" onClick={onClick} {...rest}>
          {children}
        </button>
      )}
    </li>
  )
}