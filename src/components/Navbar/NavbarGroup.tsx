// import library functionality
import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  PropsWithChildren
} from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';

// import components
import Icon from '../../components/Icon/Icon';

// import child type
import { NavbarItemProps } from './NavbarItem';

// component type
interface NavbarGroupProps extends PropsWithChildren {
  label: string;
  defaultOpen?: boolean;
  className?: string;
}

/**
 * Navbar Group component *******************************************************************
 * 
 * @param label string value for the text label of the button to expand the group
 * @param defaultOpen - (optional) boolean value that determines if the group is open by default
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function NavbarGroup(props: NavbarGroupProps) {

  const {
    label,
    defaultOpen = false,
    className,
    children,
    ...rest
  } = props;
  const itemRef = useRef<HTMLLIElement>(null);
  const contentRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const initialRender = useRef<boolean>(true);
  const classes = `guwmi-navbar-group${(isOpen || (initialRender.current && defaultOpen)) ? ' open' : ''}${className ? ' ' + className : ''}`;
  useAnimation(isOpen, 'open', itemRef);

  const buttonChildren = useMemo(() => React.Children.map(children, (child) => {
    if (React.isValidElement(child) && (!isOpen && !initialRender.current)) {
      return React.cloneElement(child as React.ReactElement<NavbarItemProps>, { disabled: true });
    } else {
      return child;
    }
  }), [children, isOpen]);

  useEffect(() => {
    if (!initialRender.current) {
      const defaultHeight = buttonRef.current.offsetHeight;
      if (contentRef.current && isOpen) {
        const height = contentRef.current.offsetHeight;
        itemRef.current.style.height = `${height + defaultHeight}px`;
      } else {
        itemRef.current.style.height = `${defaultHeight}px`;
      }
    }
  }, [isOpen]);

  useEffect(() => {
    initialRender.current = false;
    if (defaultOpen) {
      setIsOpen(true);
    }
  }, []);

  return (
    <li className={classes} ref={itemRef} {...rest}>
      <button
        className="guwmi-navbar-button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(current => !current)}
        ref={buttonRef}
      >
        {label}
        <Icon name="chevron-right" size={18} />
      </button>
      <ul ref={contentRef} tabIndex={!isOpen ? -1 : undefined}>
        {buttonChildren}
      </ul>
    </li>
  )
}