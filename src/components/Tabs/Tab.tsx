// import library functionality
import React, { PropsWithChildren, useContext } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
interface ComponentProps extends PropsWithChildren {
  index?: number;
}

export default function Tab(props: ComponentProps) {

  const { children, index } = props;
  const { id, selectedTab, setSelectedTab } = useContext(TabsContext);

  return (
      <button
        className={`guwmi-tab${selectedTab === index ? ' active' : ''}`}
        onClick={() => setSelectedTab(index)}
        id={`tabs-${id}-tab-${index}`}
        aria-selected={selectedTab === index}
        aria-controls={`tabs-${id}-tabpanel-${index}`}
      >
        {children}
      </button>
  )
}