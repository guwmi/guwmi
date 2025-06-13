// import library functionality
import { useContext, useRef, PropsWithChildren } from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';
import useTabThrough from '../../hooks/useTabThrough';

// import context
import MenuContext from './MenuContext';

// component type
export interface MenuDropdownProps extends PropsWithChildren {
  className?: string;
}

/**
 * Menu Dropdown component *****************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function MenuDropdown(props: MenuDropdownProps) {

  const { className, children, ...rest } = props;
  const { isOpen, setIsOpen, ariaLabel } = useContext(MenuContext);
  const classes = `guwmi-menu-dropdown${className ? ' ' + className : ''}`;
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useAnimation(isOpen, 'open', dropDownRef );
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