// import library functionality
import { PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  className?: string;
}

export default function CardSection(props: ComponentProps) {

  const { className, children, ...rest } = props;
  const classes = `guwmi-card-section${className ? ' ' + className : ''}`

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}