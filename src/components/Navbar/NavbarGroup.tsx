// import library functionality
import {
  useEffect,
  useRef,
  useState,
  PropsWithChildren
} from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';

// import components
import Icon from '../../components/Icon/Icon';

// component type
interface ComponentProps extends PropsWithChildren {
  label: string;
  defaultOpen?: boolean;
  className?: string;
}

export default function NavbarGroup(props: ComponentProps) {

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
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);
  const { isVisible } = useAnimation(isOpen, 'open', itemRef);
  const classes = `guwmi-navbar-group${isOpen ? ' open' : ''}${className ? ' ' + className : ''}`;

  useEffect(() => {
    const defaultHeight = buttonRef.current.offsetHeight;
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      itemRef.current.style.height = `${height + defaultHeight}px`;
    } else {
      itemRef.current.style.height = `${defaultHeight}px`;
    }
  }, [contentRef.current, isOpen]);

  return (
    <li className={classes} ref={itemRef} {...rest}>
      <button
        className="guwmi-navbar-button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
      >
        {label}
        <Icon name="chevron-right" size={18} />
      </button>
      {isVisible &&
        <ul ref={contentRef}>
          {children}
        </ul>
      }
    </li>
  )
}