// import library functionality
import { PropsWithChildren } from 'react';

// component type
export interface NavbarProps extends PropsWithChildren {
  ariaLabel: string;
  className?: string;
  skeleton?: boolean;
}

/**
 * Navbar component **************************************************************************
 * 
 * @param ariaLabel - string value for the aria-label on the nav element
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function Navbar(props: NavbarProps) {

  const {
    ariaLabel,
    className,
    skeleton,
    children,
    ...rest
  } = props;
  const classes = `guwmi-navbar${className ? ' ' + className : ''}`;

  return (
    <nav
      className={classes}
      aria-label={ariaLabel}
      {...rest}
    >
      {skeleton ? (
        <ul role="menubar">
          {Array.from({ length: 5 }, (_, index) => index).map((v, i) => (
            <li key={`navbar-skeleton-${i}`} className="guwmi-navbar-item">
              <button className="guwmi-navbar-button guwmi-skeleton" disabled></button>
            </li>
          ))}
        </ul> 
      ) : (
        <ul role="menubar">
          {children}
        </ul>
      )}
    </nav>
  )
}