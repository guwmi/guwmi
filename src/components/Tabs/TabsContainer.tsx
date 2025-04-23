// import library functionality
import React, { useState, PropsWithChildren } from 'react';

// import context
import TabsContext from './TabsContext';

export default function TabsContainer(props: PropsWithChildren) {

  const { children } = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);

  return (
    <TabsContext.Provider value={{selectedTab, setSelectedTab}}>
      <div className="guwmi-tabs-container">
        {children}
      </div>
    </TabsContext.Provider>
  )
}