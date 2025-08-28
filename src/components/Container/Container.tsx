// import library functionality
import { PropsWithChildren, JSX, useState } from 'react';

// import components
import Drawer from '../Drawer/Drawer';
import IconButton from '../IconButton/IconButton';
import Icon from '../Icon/Icon';

// component type
export interface ContainerProps extends PropsWithChildren {
  header?: JSX.Element;
  sidebar?: JSX.Element;
  sidebarAria?: string;
  sidebarIsDrawer?: boolean;
  sidebarButtonIcon?: JSX.Element;
  sidebarDrawerState?: { isOpen: boolean; onOpen: () => void; onClose: () => void; }
  className?: string;
}

/**
 * Container component **********************************************************************
 * 
 * @param header - (optional) JSX to render inside a <header> element inside of the container
 * @param sidebar - (optional) JSX to render inside an <aside> element inside of the container
 * @param sidebarAria - (optional) string value for the sidebar aria-label - defaults to 'Application sidebar'
 * @param sidebarIsDrawer - (optional) boolean value for whether the sidebar should render as a Drawer component
 * @param sidebarButtonIcon - (optional) icon component to override the default menu icon for the drawer button
 * @param sidebarDrawerState - (optional) object for overriding the drawer state and setters
 * * { 
 * *  isOpen: boolean;
 * *  onOpen: () => void;
 * *  onClose: () => void;
 * * }
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function Container(props: ContainerProps) {

  const {
    header,
    sidebar,
    sidebarAria,
    sidebarIsDrawer,
    sidebarButtonIcon = <Icon name="menu" />,
    sidebarDrawerState,
    className,
    children,
    ...rest
  } = props;
  const classes = `guwmi-container${className ? ' ' + className : ''}`;
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  return (
    <div className={classes} {...rest}>
      {header &&
        <header className="guwmi-container-header">
          {sidebarIsDrawer &&
            <div>
              <IconButton 
                ariaLabel={`Open ${sidebarAria}`}
                onClick={sidebarDrawerState ? () => sidebarDrawerState?.onOpen() : () => setSidebarOpen(true)}
                variant="ghost"
              >
                {sidebarButtonIcon}
              </IconButton>
            </div>
          }
          {header}
        </header>
      }
      <div>
        {(sidebar && !sidebarIsDrawer) ? (
          <aside className="guwmi-container-sidebar" aria-label={sidebarAria ?? 'Application sidebar'}>
            {sidebar}
          </aside>
        ) : (
          <Drawer
            open={sidebarDrawerState ? sidebarDrawerState.isOpen : sidebarOpen}
            onClose={sidebarDrawerState ? () => sidebarDrawerState?.onClose() : () => setSidebarOpen(false)}
            ariaLabel={sidebarAria ?? 'Application sidebar'}
          >
            <div className="guwmi-container-sidebar">
              {sidebar}
            </div>
          </Drawer>
        )

        }
        <main className="guwmi-container-content">
          {children}
        </main>
      </div>
    </div>
  )
}