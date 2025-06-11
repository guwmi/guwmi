// import library functionality
import { useContext, useRef, PropsWithChildren } from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';
import useTabThrough from '../../hooks/useTabThrough';

// import context
import MenuContext from './MenuContext';

// component type
interface ComponentProps extends PropsWithChildren {
  className?: string;
}

/**
 * Menu Dropdown component ************************************************************************
 * @param children - ReactElements provided as props
 */

export default function MenuDropdown(props: ComponentProps) {

  const { className, children, ...rest } = props;
  const { isOpen, setIsOpen, ariaLabel } = useContext(MenuContext);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useAnimation(isOpen, 'open', dropDownRef );
  const classes = `guwmi-menu-dropdown${className ? ' ' + className : ''}`;
  useTabThrough(isOpen, () => setIsOpen(false), dropDownRef);

  return (
    <>
      {isVisible &&
        <nav
          className={classes}
          ref={dropDownRef}
          aria-label={ariaLabel}
          {...rest}
        >
          <ul role="menubar">
            {children}
          </ul>
        </nav>
      }
    </>
  )
}