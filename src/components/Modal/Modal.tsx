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
  size?: 'sm' | 'md' | 'lg';
  open: boolean;
  onClose: () => void;
  preventScroll?: boolean;
}

export default function Modal(props: ComponentProps) {

  const { open, onClose, preventScroll = false, size = 'sm', children } = props;
  const classes = useMemo(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const modalButton = useRef<HTMLButtonElement>(null);
  const { isVisible } = useAnimation(open, 'open', modalOverlay);

  const closeOutClick = useCallback((e: MouseEvent) => {
    if (e.target !== modalButton.current && !modal.current?.contains(e.target as Node)) {
      onClose();;
    }
  }, [modal.current]);

  const handleTab = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements: NodeListOf<HTMLFormElement> = modal.current.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]');
      const firstFocusable: HTMLFormElement = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (modal.current?.contains(e.target as Node) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (modal.current?.contains(e.target as Node) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [modal.current]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();;
    }
  }, []);

  useEffect(() => {

    if (open) {
      modalButton.current = document.activeElement as HTMLButtonElement;
      setTimeout(() => modal.current?.focus(), 25);
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

  return (
    isVisible &&
      <BodyPortal>
        <div className="guwmi-modal-overlay" ref={modalOverlay}>
          <dialog className={classes} ref={modal}>
            <button
              className="guwmi-modal-close-button"
              aria-label="Close modal"
              onClick={() => onClose()}
            >
              <IconX size={20} />
            </button>
            {children}
          </dialog>
        </div>
      </BodyPortal>
  )
}