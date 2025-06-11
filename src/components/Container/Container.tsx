// import library functionality
import { PropsWithChildren, JSX } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  className?: string;
  sidebar?: JSX.Element;
  header?: JSX.Element;
}

export default function Container(props: ComponentProps) {

  const {
    className,
    sidebar,
    header,
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