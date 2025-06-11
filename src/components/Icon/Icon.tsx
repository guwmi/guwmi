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
  View
} from './paths';

// types
interface ComponentProps extends SVGProps<SVGSVGElement> {
  name: 
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
  | 'view';
  size?: number;
  stroke?: '1' | '2' | '3';
  color?: string;
  className?: string;
}

/**
 * Icon component ****************************************************************************
 * @param ComponentProps
 */

const Icon = forwardRef<SVGSVGElement, ComponentProps>(( props, ref ) => {

  const {
    name,
    size = 24,
    stroke = 2,
    color = "currentColor",
    className,
    ...rest
  } = props;
  const classes =`icon guwmi-icon guwmi-icon-${name}${className ? ' ' + className : ''}`;
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
      {...rest}
      >
        {paths}
      </svg>
  );
});

export default Icon;
