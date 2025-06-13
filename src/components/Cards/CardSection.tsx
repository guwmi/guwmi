// import library functionality
import { PropsWithChildren } from 'react';

// component type
export interface CardSectionProps extends PropsWithChildren {
  className?: string;
}

/**
 * Card Section component *******************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function CardSection(props: CardSectionProps) {

  const { className, children, ...rest } = props;
  const classes = `guwmi-card-section${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}