// import library functionality
import { PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  ariaLabel: string;
  className?: string;
}

export default function Navbar(props: ComponentProps) {

  const {
    ariaLabel,
    className,
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
      <ul>
        {children}
      </ul>
    </nav>
  )
}