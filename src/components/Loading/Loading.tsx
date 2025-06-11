// import custom fuctionality
import usePreventScroll from '../../hooks/usePreventScroll';

// import components
import BodyPortal from '../../components/utils/BodyPortal';

// component type
interface ComponentProps {
  active: boolean;
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
  position?: 'inline' | 'block' | 'full-screen';
  overlay?: boolean;
  className?: string;
}

/**
 * Loading Component ********************************************************************************
 * @param
 */

export default function Loading(props: ComponentProps) {

  const {
    active,
    size = 'md',
    position = 'block',
    speed = 'normal',
    overlay = false,
    className,
    ...rest 
  } = props;
  const classes = `guwmi-loading-container ${size} ${speed} ${position} ${className ?? ''}${overlay ? ' overlay' : ''} `;
  usePreventScroll(active, position === 'full-screen');

  return (
    active && (
      position !== 'full-screen' ? (
        <div className={classes} {...rest}>
          <div className="guwmi-spinner"></div>
        </div>
      ) : (
        <BodyPortal>
          <div className={classes} {...rest}>
            <div className="guwmi-spinner"></div>
          </div>
        </BodyPortal>
      )
    )
  )
}