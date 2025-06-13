// import library functionality
import { PropsWithChildren, JSX } from 'react';

// component type
export interface ContainerProps extends PropsWithChildren {
  header?: JSX.Element;
  sidebar?: JSX.Element;
  className?: string;
}

/**
 * Container component **********************************************************************
 * 
 * @param header - (optional) JSX to render inside a <header> element inside of the container
 * @param sidebar - (optional) JSX to render inside an <aside> element inside of the container
 * @param className - (optional) string value of class names to apply to the component
 */

export default function Container(props: ContainerProps) {

  const {
    header,
    sidebar,
    className,
    children,
    ...rest
  } = props;
  const classes = `guwmi-container${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      {header &&
        <header className="guwmi-container-header">
          {header}
        </header>
      }
      <div>
        {sidebar && 
          <aside className="guwmi-container-sidebar">
            {sidebar}
          </aside>
        }
        <main className="guwmi-container-content">
          {children}
        </main>
      </div>
    </div>
  )
}