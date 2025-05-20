// import library functionality
import { useMemo, forwardRef, SVGProps } from 'react';

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
  Home,
  Info,
  Login,
  Menu,
  ProgressAlert,
  ProgressCheck,
  Progress,
  Search,
  Settings
} from './paths';

// types
interface ComponentProps extends SVGProps<SVGSVGElement> {
  name: 
  | 'alert-circle'
  | 'alert-squre'
  | 'alert-triangle'
  | 'check'
  | 'chevron-down'
  | 'chevron-left'
  | 'chevron-right'
  | 'chevron-up'
  | 'copy'
  | 'close'
  | 'dots'
  | 'home'
  | 'info'
  | 'login'
  | 'menu'
  | 'progress-alert'
  | 'progress-check'
  | 'progress'
  | 'search'
  | 'settings';
  size?: number;
  stroke?: '1' | '2' | '3';
  color?: string;
  className?: string;
}

/**
 * Icon container component ****************************************************************************
 * @param ComponentProps
 */

const Icon = forwardRef<SVGSVGElement, ComponentProps>(( props, ref ) => {

  const {
    name,
    size = 24,
    stroke = 2,
    color = "currentColor",
    className
  } = props;
  const classes = useMemo(() => `icon guwmi-icon guwmi-icon-${name}${className ? ' ' + className : ''}`, [className]);
  const paths = useMemo(() => {
    switch(name) {
      case 'alert-circle':
        return <AlertCircle />
      case 'alert-squre':
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
    }
  }, [name]);

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
      >
        {paths}
      </svg>
  );
});

export default Icon;
