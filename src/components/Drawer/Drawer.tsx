// import library functionality
import { useRef, PropsWithChildren } from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';
import useFocusTrap from '../../hooks/useFocusTrap';
import useClickOutside from '../../hooks/useClickOutside';

// import components
import BodyPortal from '../utils/BodyPortal';
import Icon from '../Icon/Icon';
import usePreventScroll from '../../hooks/usePreventScroll';

// component type
export interface DrawerProps extends PropsWithChildren {
  open: boolean;
  preventScroll?: boolean;
  position?: 'left' | 'right';
  className?: string;
  onClose: () => void;
}

/**
 * Drawer component *************************************************************************
 * @param open - boolean value that determines of the drawer is displayed (or in the DOM)
 * @param preventScroll - (optional) boolean value that determines if scrolling should be prevented while the drawer is open
 * @param position - (optional) value of 'left' or 'right' the determines the drawers position - defaults to 'left'
 * @param className - (optional) string value of class names to apply to the component
 * @param onClose - callback function called on any "closing" events like escape key press or close button click
 */

export default function Drawer(props: DrawerProps) {

  const {
    open,
    preventScroll,
    position = 'left',
    className,
    onClose,
    children,
    ...rest
  } = props;
  const classes = `guwmi-drawer ${position}${className ? ' ' + className : ''}`;
  const drawerOverlay = useRef<HTMLDivElement>(null);
  const drawer = useRef<HTMLElement>(null);
  const { isVisible } = useAnimation(open, 'open', drawerOverlay);
  useFocusTrap(open, onClose, drawer);
  useClickOutside(open, onClose, drawer);
  usePreventScroll(open, preventScroll);

  return (
    isVisible &&
      <BodyPortal>
          <div className="guwmi-drawer-overlay" ref={drawerOverlay} {...rest}>
            <aside className={classes} ref={drawer} aria-modal="true" tabIndex={0}>
              <button
                className="guwmi-drawer-close-button"
                aria-label="Close drawer"
                onClick={() => onClose()}
              >
                <Icon name="close" size={20} />
              </button>
              {children}
            </aside>
          </div>
      </BodyPortal>
  )
}