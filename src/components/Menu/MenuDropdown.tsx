// import library functionality
import { useContext, useRef, PropsWithChildren } from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';
import useTabThrough from '../../hooks/useTabThrough';

// import context
import MenuContext from './MenuContext';

/**
 * Menu Dropdown component ************************************************************************
 * @param children - ReactElements provided as props
 */

export default function MenuDropdown(props: PropsWithChildren) {

  const { children } = props;
  const { isOpen, setIsOpen, ariaLabel } = useContext(MenuContext);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useAnimation(isOpen, 'open', dropDownRef );
  useTabThrough(isOpen, () => setIsOpen(false), dropDownRef);

  return (
    <>
      {isVisible &&
        <nav
          className="guwmi-menu-dropdown"
          data-testid="guwmi-menu-dropdown"
          ref={dropDownRef}
          aria-label={ariaLabel}
        >
          <ul role="menubar">
            {children}
          </ul>
        </nav>
      }
    </>
  )
}