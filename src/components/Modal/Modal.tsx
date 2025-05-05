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
  const modal = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setIsAnimating(true);
    setIsOpen(false);
  }, []);

  const closeOutClick = useCallback((e: MouseEvent) => {
    if (!modal.current.contains(e.target as Node)) {
      close();
    }
  }, [modal.current]);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
      setIsOpen(true);
      document.addEventListener('click', closeOutClick);
      if (preventScroll) {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      }
    } else {
      document.removeEventListener('click', closeOutClick);
      if (preventScroll) {
        document.body.removeAttribute('style');
      }
    }

    return () => document.removeEventListener('click', closeOutClick);
  }, [open])

  useEffect(() => {
    modalOverlay.current?.addEventListener('transitioncancel', () => setIsAnimating(false));
    modalOverlay.current?.addEventListener('transitionend', () => setIsAnimating(false));
  }, [modalOverlay.current]);

  useEffect(() => {
    if (!isOpen) {
      onClose();
    }
  }, [isOpen])

  return (
    <ModalPortal>
      {(open || isOpen || isAnimating) &&
        <div className={overlayClasses} aria-modal="true" ref={modalOverlay}>
          <div className={classes} ref={modal}>
            <button
              className="guwmi-modal-close-button"
              aria-label="Close modal"
              onClick={() => close()}
            >
              <IconX size={20} />
            </button>
            {children}
          </div>
        </div>
      }
    </ModalPortal>
  )
}