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
export interface ModalProps extends PropsWithChildren {
  size?:
  | 'sm'
  | 'md'
  | 'lg'
  | 'full-screen';
  open: boolean;
  preventScroll?: boolean;
  className?: string;
  onClose: () => void;
}

/**
 * Modal component ************************************************************************
 * 
 * @param size - (optional) value of 'sm', 'md', lg', or 'full-screen' determines the modal size - defaults to 'md'
 * @param open - boolean value that determines of the modal is displayed (or in the DOM)
 * @param preventScroll - (optional) boolean value that determines if scrolling should be prevented while the modal is open
 * @param className - (optional) string value of class names to apply to the component
 * @param onClose - callback function called on any "closing" events like escape key press or close button click
 * 
 */

export default function Modal(props: ModalProps) {

  const {
    open,
    onClose,
    size = 'md',
    preventScroll = size === 'full-screen' ? true : false,
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
          <dialog className={classes} ref={modal} aria-modal="true">
            <button
              className="guwmi-modal-close-button"
              aria-label="Close modal"
              onClick={onClose}
            >
              <Icon name="close" size={20} />
            </button>
            {children}
          </dialog>
        </div>
      </BodyPortal>
  )
}