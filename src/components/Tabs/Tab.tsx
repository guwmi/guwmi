// import library functionality
import { PropsWithChildren, useContext } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
interface ComponentProps extends PropsWithChildren {
  index?: number;
  className?: string;
}

export default function Tab(props: ComponentProps) {

  const {
    className,
    children,
    index,
    ...rest
  } = props;
  const { id, selectedTab, setSelectedTab } = useContext(TabsContext);
  const classes = `guwmi-tab${selectedTab === index ? ' active' : ''}${className ? ' ' + className : ''}`

  return (
      <button
        className={classes}
        onClick={() => setSelectedTab(index)}
        id={`tabs-${id}-tab-${index}`}
        aria-selected={selectedTab === index}
        aria-controls={`tabs-${id}-tabpanel-${index}`}
        {...rest}
      >
        {children}
      </button>
  )
}