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
  const { id, selectedTab } = useContext(TabsContext);

  return (
    <section
      className="guwmi-tab-panel"
      role="tabpanel"
      hidden={selectedTab !== index}
      aria-labelledby={`tabs-${id}-tab-${index}`}
      id={`tabs-${id}-tabpanel-${index}`}
    >
      {children}
    </section>
  )
}