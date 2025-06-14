// import library functionality
import { useState, useId, PropsWithChildren } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
export interface TabsContainerProps extends PropsWithChildren {
  className?: string;
  skeleton?: boolean;
}

/**
 * Tabs Container component ****************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function TabsContainer(props: TabsContainerProps) {

  const {
    className,
    skeleton,
    children,
    ...rest
  } = props;
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const classes = `guwmi-tabs-container${className ? ' ' + className : ''}`;
  const id = useId();

  return (
    <TabsContext.Provider value={{skeleton, id, selectedTab, setSelectedTab}}>
      <div className={classes} {...rest}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}