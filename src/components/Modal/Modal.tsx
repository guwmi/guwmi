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
import { IconX } from '@tabler/icons-react';

function ModalPortal(props: PropsWithChildren) {
  const { children } = props;
  const [hasDocument, setHasDocument] = useState<boolean>(false);

  useEffect(() => {
    setHasDocument((typeof document !== 'undefined'));
  }, [])

  return hasDocument ? ReactDOM.createPortal(children, document.body) : null;
}

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  open: boolean;
  onClose: () => void;
  preventScroll?: boolean;
}

export default function Modal(props: ComponentProps) {

  const { open, onClose, preventScroll = false, size = 'sm', children } = props;
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const overlayClasses = useMemo(() => `guwmi-modal-overlay${isOpen ? ' open' : ''}`, [isOpen])
  const classes = useMemo(() => `guwmi-modal ${size}`, [size]);
  const modalOverlay = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const modalButton = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setIsAnimating(true);
    setIsOpen(false);
    modalButton.current.focus();
  }, []);

  const setAnimationState = useCallback(() => {
    setIsAnimating(false);
  }, [])

  const closeOutClick = useCallback((e: MouseEvent) => {
    if (!modal.current.contains(e.target as Node)) {
      close();
    }
  }, [modal.current]);

  const handleTab = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements: NodeListOf<HTMLFormElement> = modal.current.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]');
      const firstFocusable: HTMLFormElement = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (modal.current.contains(e.target as Node) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (modal.current.contains(e.target as Node) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [modal.current]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      close();
    }
  }, []);

  useEffect(() => {

    if (open) {
      setIsAnimating(true);
      setIsOpen(true);
      modalButton.current = document.activeElement as HTMLButtonElement;
      modal.current.focus();
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
    modalOverlay.current?.addEventListener('transitioncancel', setAnimationState);
    modalOverlay.current?.addEventListener('transitionend', setAnimationState);

    return () => {
      modalOverlay.current?.removeEventListener('transitioncancel', setAnimationState);
      modalOverlay.current?.removeEventListener('transitionend', setAnimationState);
    }
  }, [modalOverlay.current]);

  useEffect(() => {
    if (!isOpen) {
      onClose();
    }
  }, [isOpen])

  return (
    <ModalPortal>
      {(open || isOpen || isAnimating) &&
        <div className={overlayClasses} ref={modalOverlay}>
          <dialog className={classes} ref={modal}>
            <button
              className="guwmi-modal-close-button"
              aria-label="Close modal"
              onClick={() => close()}
            >
              <IconX size={20} />
            </button>
            {children}
          </dialog>
        </div>
      }
    </ModalPortal>
  )
}