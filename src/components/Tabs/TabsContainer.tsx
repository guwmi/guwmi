// import library functionality
import React, { useState, useId, PropsWithChildren } from 'react';

// import context
import TabsContext from './TabsContext';

export default function TabsContainer(props: PropsWithChildren) {

  const { children } = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const id = useId();

  return (
    <TabsContext.Provider value={{id, selectedTab, setSelectedTab}}>
      <div className="guwmi-tabs-container">
        {children}
      </div>
    </TabsContext.Provider>
  )
}