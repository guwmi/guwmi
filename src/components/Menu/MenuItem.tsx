// import library functionality
import React, { useMemo, PropsWithChildren } from 'react';

// compoent type
interface ComponentProps extends PropsWithChildren {
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  href?: string;
}

/**
 * Menu Item component *****************************************************************************
 * @param ComponentProps
 */

export default function MenuItem(props: ComponentProps) {

  const { children, onClick, href, ...rest } = props;
  const classes = useMemo(() => `guwmi-menu-item`, []);

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