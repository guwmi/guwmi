// import library functionality
import { useState, useId, PropsWithChildren } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
interface ComponentProps extends PropsWithChildren {
  className?: string;
  skeleton?: boolean;
}

export default function TabsContainer(props: ComponentProps) {

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