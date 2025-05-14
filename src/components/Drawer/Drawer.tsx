// import library functionality
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  PropsWithChildren
} from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';

// import components
import BodyPortal from '../utils/BodyPortal';
import { IconX } from '@tabler/icons-react';

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
  const drawerButton = useRef<HTMLButtonElement>(null);
  const { isVisible } = useAnimation(open, 'open', drawerOverlay);

  const closeOutClick = useCallback((e: MouseEvent) => {
    if (e.target !== drawerButton.current && !drawer.current?.contains(e.target as Node)) {
      onClose();
    }
  }, [drawer.current]);

  const handleTab = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements: NodeListOf<HTMLFormElement> = drawer.current.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]');
      const firstFocusable: HTMLFormElement = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (drawer.current?.contains(e.target as Node) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (drawer.current?.contains(e.target as Node) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [drawer.current]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, []);

  useEffect(() => {

    if (open) {
      drawerButton.current = document.activeElement as HTMLButtonElement;
      setTimeout(() => drawer.current?.focus(), 25);
      document.addEventListener('click', closeOutClick);
      document.addEventListener('keydown', handleTab);
      document.addEventListener('keydown', handleEscape);
      if (preventScroll) {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      }
    } else {
      drawerButton.current?.focus();
      document.removeEventListener('click', closeOutClick);
      document.removeEventListener('keydown', handleTab);
      document.removeEventListener('keydown', handleEscape);
      if (preventScroll) {
        document.body.removeAttribute('style');
      }
    }

    return () => {
      document.removeEventListener('click', closeOutClick);
      document.removeEventListener('keydown', handleTab);
      document.removeEventListener('keydown', handleEscape);
    }
  }, [open]);

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
                <IconX size={20} />
              </button>
              {children}
            </aside>
          </div>
      </BodyPortal>
  )
}