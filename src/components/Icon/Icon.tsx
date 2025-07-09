// import library functionality
import { useCallback, forwardRef, SVGProps } from 'react';

// import icon paths
import {
  AlertCircle,
  AlertSquare,
  AlertTriangle,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Copy,
  Close,
  Dots,
  ExternalLink,
  Hide,
  Home,
  Info,
  Login,
  Menu,
  ProgressAlert,
  ProgressCheck,
  Progress,
  Search,
  Settings,
  Trash,
  User,
  View
} from './paths';

// component types
export type IconName =
| 'alert-circle'
| 'alert-square'
| 'alert-triangle'
| 'check'
| 'chevron-down'
| 'chevron-left'
| 'chevron-right'
| 'chevron-up'
| 'copy'
| 'close'
| 'dots'
| 'external-link'
| 'hide'
| 'home'
| 'info'
| 'login'
| 'menu'
| 'progress-alert'
| 'progress-check'
| 'progress'
| 'search'
| 'settings'
| 'trash'
| 'user'
| 'view';

export interface IconProps extends SVGProps<SVGSVGElement> {
  ariaLabel?: string;
  name: IconName;
  size?: number;
  stroke?: '1' | '2' | '3';
  color?: string;
  className?: string;
}

/**
 * Icon component ****************************************************************************
 * 
 * @param ariaLabel - (optional) string value to override the svg aria-label property
 * @param name - string value for the icon SVG to render.  options are:
 * * 'alert-circle'
 * * 'alert-square'
 * * 'alert-triangle'
 * * 'check'
 * * 'chevron-down'
 * * 'chevron-left'
 * * 'chevron-right'
 * * 'chevron-up'
 * * 'copy'
 * * 'close'
 * * 'dots'
 * * 'external-link'
 * * 'hide'
 * * 'home'
 * * 'info'
 * * 'login'
 * * 'menu'
 * * 'progress-alert'
 * * 'progress-check'
 * * 'progress'
 * * 'search'
 * * 'settings'
 * * 'trash'
 * * 'user'
 * * 'view';
 * @param size - (optional) number value for the size of the icon - defaults to 24
 * @param stroke - (optional) value of '1', '2', or '3' to determine the strokeWidth property of the SVG - defaults to '2'
 * @param color - (optional) string value for the color "stroke" property of the SVG - defaults to "currentColor"
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

const Icon = forwardRef<SVGSVGElement, IconProps>(( props, ref ) => {

  const {
    ariaLabel,
    name,
    size = 24,
    stroke = '2',
    color = "currentColor",
    className,
    ...rest
  } = props;
  const classes = `icon guwmi-icon guwmi-icon-${name}${className ? ' ' + className : ''}`;

  const getPaths = useCallback((iconName:String) => {
    switch(iconName) {
      case 'alert-circle':
        return <AlertCircle />
      case 'alert-square':
        return <AlertSquare />
      case 'alert-triangle':
        return <AlertTriangle />
      case 'check':
        return <Check />
      case 'chevron-down':
        return <ChevronDown />
      case 'chevron-left':
        return <ChevronLeft />
      case 'chevron-right':
        return <ChevronRight />
      case 'chevron-up':
        return <ChevronUp />
      case 'copy':
        return <Copy />
      case 'close':
        return <Close />
      case 'dots':
        return <Dots />
      case 'external-link':
        return <ExternalLink />
      case 'hide':
        return <Hide />
      case 'home':
        return <Home />
      case 'info':
        return <Info />
      case 'login':
        return <Login />
      case 'menu':
        return <Menu />
      case 'progress-alert':
        return <ProgressAlert />
      case 'progress-check':
        return <ProgressCheck />
      case 'progress':
        return <Progress />
      case 'search':
        return <Search />
      case 'settings':
        return <Settings />
      case 'trash':
        return <Trash />
      case 'user':
        return <User />
      case 'view':
        return <View />
    }
  }, []);
  const paths = getPaths(name);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={classes}
      aria-label={ariaLabel ?? name}
      {...rest}
      >
        {paths}
      </svg>
  );
});

export default Icon;
