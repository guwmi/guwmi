// import library functionality
import { useMemo, useRef, PropsWithChildren } from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';
import useTrapTabs from '../../hooks/useTrapTabs';
import useCloseOutClick from '../../hooks/useCloseOutClick';
import usePreventScroll from '../../hooks/usePreventScroll';

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
  const { isVisible } = useAnimation(open, 'open', modalOverlay);
  useTrapTabs(open, onClose, modal);
  useCloseOutClick(open, onClose, modal);
  usePreventScroll(open, preventScroll);

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