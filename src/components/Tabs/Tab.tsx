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
  const { selectedTab, setSelectedTab } = useContext(TabsContext);

  return (
    <div className={`guwmi-tab${selectedTab === index ? ' active' : ''}`}>
      <button className="guwmi-tab-trigger" onClick={() => setSelectedTab(index)}>
        {children}
      </button>
    </div>
  )
}