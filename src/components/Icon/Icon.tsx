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
 * @param ariaLabel - (optional) string to set the svg aria-label property, otherwise the icon name will be used for the aria-label
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

  const iconMap = {
    'alert-circle': AlertCircle,
    'alert-square': AlertSquare,
    'alert-triangle': AlertTriangle,
    'check': Check,
    'chevron-down': ChevronDown,
    'chevron-left': ChevronLeft,
    'chevron-right': ChevronRight,
    'chevron-up': ChevronUp,
    'copy': Copy,
    'close': Close,
    'dots': Dots,
    'external-link': ExternalLink,
    'hide': Hide,
    'home': Home,
    'info': Info,
    'login': Login,
    'menu': Menu,
    'progress-alert': ProgressAlert,
    'progress-check': ProgressCheck,
    'progress': Progress,
    'search': Search,
    'settings': Settings,
    'trash': Trash,
    'user': User,
    'view': View,
  }
  const Path = iconMap[name];

  return (
    Path && (
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
          <Path />
        </svg>
    )
  );
});

export default Icon;
