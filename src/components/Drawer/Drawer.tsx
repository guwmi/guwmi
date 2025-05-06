// import library functionality
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  PropsWithChildren
} from 'react';
import ReactDOM from 'react-dom';

// import components
import { X } from 'tabler-icons-react';

function DrawerPortal(props: PropsWithChildren) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState<boolean>(false);

  useEffect(() => {
    setHasDocument((typeof document !== 'undefined'));
  }, [])

  return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}

// component type
interface ComponentProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  preventScroll?: boolean;
  position?: 'left' | 'right';
}

export default function Drawer(props: ComponentProps) {

  const { open, onClose, preventScroll = false, position = 'left', children } = props;
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const overlayClasses = useMemo(() => `guwmi-drawer-overlay${isOpen ? ' open' : ''}`, [isOpen])
  const classes = useMemo(() => `guwmi-drawer ${position}`, [position]);
  const drawerOverlay = useRef<HTMLDivElement>(null);
  const drawer = useRef<HTMLElement>(null);
  const drawerButton = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsAnimating(true);
    setIsOpen(false);
    drawerButton.current.focus();
  }, []);

  const setAnimationState = useCallback(() => {
    setIsAnimating(false);
  }, [])

  const closeOutClick = useCallback((e: MouseEvent) => {
    if (!drawer.current.contains(e.target as Node)) {
      close();
    }
  }, [drawer.current]);

  const handleTab = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements: NodeListOf<HTMLFormElement> = drawer.current.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]');
      const firstFocusable: HTMLFormElement = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (drawer.current.contains(e.target as Node) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (drawer.current.contains(e.target as Node) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [drawer.current]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  }, []);

  useEffect(() => {

    if (open) {
      setIsAnimating(true);
      setIsOpen(true);
      drawerButton.current = document.activeElement as HTMLButtonElement;
      drawer.current.focus();
      document.addEventListener('click', closeOutClick);
      document.addEventListener('keydown', handleTab);
      document.addEventListener('keydown', handleEscape);
      if (preventScroll) {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      }
    } else {
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

  useEffect(() => {
    drawerOverlay.current?.addEventListener('transitioncancel', setAnimationState);
    drawerOverlay.current?.addEventListener('transitionend', setAnimationState);

    return () => {
      drawerOverlay.current?.removeEventListener('transitioncancel', setAnimationState);
      drawerOverlay.current?.removeEventListener('transitionend', setAnimationState);
    }
  }, [drawerOverlay.current]);

  useEffect(() => {
    if (!isOpen) {
      onClose();
    }
  }, [isOpen])

  return (
    <DrawerPortal>
      {(open || isOpen || isAnimating) &&
        <div className={overlayClasses} ref={drawerOverlay}>
          <aside className={classes} ref={drawer} aria-modal="true" tabIndex={0}>
            <button
              className="guwmi-drawer-close-button"
              aria-label="Close drawer"
              onClick={() => close()}
            >
              <X size={20} />
            </button>
            {children}
          </aside>
        </div>
      }
    </DrawerPortal>
  )
}