// import library functionality
import { useRef, PropsWithChildren } from 'react';

// import custom functionality
import useAnimation from '../../hooks/useAnimation';
import useFocusTrap from '../../hooks/useFocusTrap';
import useClickOutside from '../../hooks/useClickOutside';
import usePreventScroll from '../../hooks/usePreventScroll';

// import components
import BodyPortal from '../utils/BodyPortal';
import Icon from '../Icon/Icon';

// component type
interface ComponentProps extends PropsWithChildren {
  size?: 'sm' | 'md' | 'lg';
  open: boolean;
  onClose: () => void;
  preventScroll?: boolean;
  className?: string;
}

export default function Modal(props: ComponentProps) {

  const {
    open,
    onClose,
    preventScroll = false,
    size = 'sm',
    className,
    children,
    ...rest
  } = props;
  const classes = `guwmi-modal ${size}${className ? ' ' + className : ''}`;
  const modalOverlay = useRef<HTMLDivElement>(null);
  const modal = useRef<HTMLDialogElement>(null);
  const { isVisible } = useAnimation(open, 'open', modalOverlay);
  useFocusTrap(open, onClose, modal);
  useClickOutside(open, onClose, modal);
  usePreventScroll(open, preventScroll);

  return (
    isVisible &&
      <BodyPortal>
        <div className="guwmi-modal-overlay" ref={modalOverlay} {...rest}>
          <dialog className={classes} ref={modal}>
            <button
              className="guwmi-modal-close-button"
              aria-label="Close modal"
              onClick={() => onClose()}
            >
              <Icon name="close" size={20} />
            </button>
            {children}
          </dialog>
        </div>
      </BodyPortal>
  )
}