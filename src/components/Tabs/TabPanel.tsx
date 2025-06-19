// import library functionality
import { useContext, PropsWithChildren } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
export interface TabPanelProps extends PropsWithChildren {
  index?: number; // optional but providded by parent TabPanels component
  className?: string;
}

/**
 * Tab Panel component **********************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function TabPanel(props: TabPanelProps) {

  const {
    className,
    children,
    index,
    ...rest
  } = props;
  const { id, selectedTab } = useContext(TabsContext);
  const classes = `guwmi-tab-panel${selectedTab === index ? ' active' : ''}${className ? ' ' + className : ''}`;

  return (
    <section
      className={classes}
      role="tabpanel"
      hidden={selectedTab !== index}
      aria-labelledby={`tabs-${id}-tab-${index}`}
      id={`tabs-${id}-tabpanel-${index}`}
      {...rest}
    >
      {children}
    </section>
  )
}