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

  const openSidebar = () => {
    if (sidebarDrawerState ) {
      sidebarDrawerState?.onOpen();
    } else {
      setSidebarOpen(true);
    }
  }

  const closeSidebar = () => {
    if (sidebarDrawerState ) {
      sidebarDrawerState?.onClose();
    } else {
      setSidebarOpen(false);
    }
  }

  return (
    <div className={classes} {...rest}>
      {header &&
        <header className="guwmi-container-header">
          {sidebar && sidebarIsDrawer &&
            <div>
              <IconButton 
                ariaLabel={`Open ${sidebarAria ?? 'application sidebar'}`}
                onClick={openSidebar}
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
        {(sidebar && (
          sidebarIsDrawer) ? (
            <Drawer
              open={sidebarDrawerState ? sidebarDrawerState.isOpen : sidebarOpen}
              onClose={closeSidebar}
              ariaLabel={sidebarAria ?? 'Application sidebar'}
              preventScroll
            >
              <div className="guwmi-container-sidebar">
                {sidebar}
              </div>
            </Drawer>
          ) : (
            <aside className="guwmi-container-sidebar" aria-label={sidebarAria ?? 'Application sidebar'}>
              {sidebar}
            </aside>
        ))}
        <main className="guwmi-container-content">
          {children}
        </main>
      </div>
    </div>
  )
}