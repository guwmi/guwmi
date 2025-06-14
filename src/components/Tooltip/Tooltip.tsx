// import library functionality
import { PropsWithChildren } from 'react';

// component type
export interface TooltipProps extends PropsWithChildren {
  text: string;
  align?:
  | 'top'
  | 'bottom'
  | 'left'
  | 'right';
  className?: string;
}

/**
 * Tooltip component ************************************************************************
 * 
 * @param text - string value for the tooltip to display
 * @param align - (optional) value of 'top', 'bottom', 'left', or 'right' determines the tooltip alignment - defaults to 'top'
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function Tooltip(props: TooltipProps) {

  const {
    text,
    align = 'top',
    className,
    children,
    ...rest
  } = props;
  const classes = `guwmi-tooltip ${align}${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      <span>{text}</span>
      {children}
    </div>
  )
}