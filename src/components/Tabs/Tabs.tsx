// import library functionality
import React, {
  useContext,
  useEffect,
  useMemo,
  useRef,
  PropsWithChildren
} from 'react';

// import context
import TabsContext from './TabsContext';

// import types
import { TabProps } from './Tab';

// component type
export interface TabsProps extends PropsWithChildren {
  className?: string;
}

/**
 * Tabs component **************************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function Tabs(props: TabsProps) {

  const { className, children, ...rest } = props;
  const { skeleton, selectedTab } = useContext(TabsContext);
  const tabsContainer = useRef(null);
  const slider = useRef(null);
  const classes = `guwmi-tabs${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<TabProps>, { index: index });
      } else {
        return child;
      }
    })
  }, [children])

  useEffect(() => {
    if (tabsContainer.current.querySelector('.guwmi-tab.active')) {
      const activeTab = tabsContainer.current.querySelector('.guwmi-tab.active');
      const left = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [selectedTab])

  return (
    <nav className={classes} role="tablist" ref={tabsContainer} {...rest}>
      <span className="guwmi-tabs-slider" ref={slider}></span>
      {childrenWithIndex}
    </nav>
  )
}