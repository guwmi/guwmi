// import library functionality
import React, { useContext, PropsWithChildren } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
interface ComponentProps extends PropsWithChildren {
  index?: number;
}

export default function TabPanel(props: ComponentProps) {

  const { children, index } = props;
  const { selectedTab } = useContext(TabsContext);

  return (
    <>
      {selectedTab === index &&
        <div className="guwmi-tab-panel">
          {children}
        </div>
      }
    </>
  )
}