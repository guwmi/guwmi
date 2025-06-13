// import custom fuctionality
import usePreventScroll from '../../hooks/usePreventScroll';

// import components
import BodyPortal from '../../components/utils/BodyPortal';

// component type
export interface LoadingProps {
  active: boolean;
  size?: 'sm' | 'md' | 'lg';
  speed?: 'slow' | 'normal' | 'fast';
  position?: 'inline' | 'block' | 'full-screen';
  overlay?: boolean;
  className?: string;
}

/**
 * Loading component ************************************************************************
 * 
 * @param active - boolean value for whether the loading icon should be displayed
 * @param size - (optional) value of 'sm', 'md', or 'lg' that determines the size of the icon - defaults to 'md'
 * @param speed - (optional) value of slow', 'normal', or 'fast' that determines the speed the icon rotates - defaults to 'nornal'
 * @param position - (optional) value of 'inline', 'block', or 'full-screen' determines the display of the icon - defaults to 'block'
 * @param overlay - (optional) boolean value that determines if an overlay is rendered behind the icon
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function Loading(props: LoadingProps) {

  const {
    active,
    size = 'md',
    speed = 'normal',
    position = 'block',
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