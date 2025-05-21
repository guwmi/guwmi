// import library functionality
import { useMemo, useRef, PropsWithChildren } from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';
import useFocusTrap from '../../hooks/useFocusTrap';
import useCloseOutClick from '../../hooks/useCloseOutClick';

// import components
import BodyPortal from '../utils/BodyPortal';
import Icon from '../Icon/Icon';
import usePreventScroll from '../../hooks/usePreventScroll';

// component type
interface ComponentProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  preventScroll?: boolean;
  position?: 'left' | 'right';
}

export default function Drawer(props: ComponentProps) {

  const { open, onClose, preventScroll = false, position = 'left', children } = props;
  const classes = useMemo(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = useRef<HTMLDivElement>(null);
  const drawer = useRef<HTMLElement>(null);
  const { isVisible } = useAnimation(open, 'open', drawerOverlay);
  useFocusTrap(open, onClose, drawer);
  useCloseOutClick(open, onClose, drawer);
  usePreventScroll(open, preventScroll);

  return (
    isVisible &&
      <BodyPortal>
          <div className="guwmi-drawer-overlay" ref={drawerOverlay}>
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