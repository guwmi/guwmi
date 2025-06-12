// import library functionality
import { PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  ariaLabel: string;
  className?: string;
  skeleton?: boolean;
}

export default function Navbar(props: ComponentProps) {

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
        <ul>
          {Array.from({ length: 5 }, (_, index) => index).map((v, i) => (
            <li key={`navbar-skeleton-${i}`} className="guwmi-navbar-item">
              <button className="guwmi-navbar-button guwmi-skeleton"></button>
            </li>
          ))}
        </ul> 
      ) : (
        <ul>
          {children}
        </ul>
      )}
    </nav>
  )
}