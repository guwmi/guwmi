// import library functionality
import { PropsWithChildren, useContext } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
export interface TabProps extends PropsWithChildren {
  index?: number; // optional but providded by parent Tabs component
  className?: string;
}

/**
 * Tab component **************************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function Tab(props: TabProps) {

  const {
    className,
    children,
    index,
    ...rest
  } = props;
  const { id, selectedTab, setSelectedTab, skeleton } = useContext(TabsContext);
  const classes = `guwmi-tab${selectedTab === index ? ' active' : ''}${className ? ' ' + className : ''}`

  return (
      <button
        className={classes}
        onClick={() => setSelectedTab(index)}
        id={`tabs-${id}-tab-${index}`}
        aria-selected={selectedTab === index}
        aria-controls={`tabs-${id}-tabpanel-${index}`}
        disabled={skeleton}
        role="tab"
        {...rest}
      >
        {children}
      </button>
  )
}