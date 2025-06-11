// import library functionality
import React, { useRef, PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  active?: boolean;
  className?: string;
  onClick?: (React.MouseEventHandler<HTMLButtonElement> | undefined);
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  disabled?: boolean;
}

/**
 * NavbarItem Component ********************************************************************************
 * @param ComponentProps
 */

export default function NavbarItem(props: ComponentProps) {

  const {
    active,
    children,
    className,
    onClick,
    href,
    target = null,
    disabled = false,
    ...rest
  } = props;
  const classes = `guwmi-navbar-item${active ? ' active' : ''}${className ? ' ' + className : ''}`;
  const button = useRef(null);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    button.current.focus();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <li className={classes} {...rest}>
      {href && !disabled ? (
        <a className="guwmi-navbar-button" href={href} target={target} ref={button}>
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