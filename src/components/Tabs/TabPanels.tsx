// import library functionality
import React, {
  useContext,
  useMemo,
  useRef,
  useEffect,
  PropsWithChildren
} from 'react';

// import custom functionality
import useWindowWidth from '../../hooks/useWindowWidth';

// import context
import TabsContext from './TabsContext';

// import types
import { TabPanelProps } from './TabPanel';

// component type
export interface TabPanelsProps extends PropsWithChildren {
  className?: string;
}

/**
 * Tab Panels component *********************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function TabPanels(props: TabPanelsProps) {

  const { className, children, ...rest } = props;
  const { skeleton, selectedTab } = useContext(TabsContext);
  const windowWidth = useWindowWidth();
  const panels = useRef(null);
  const classes = `guwmi-tab-panels${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<TabPanelProps>, { index: index });
      } else {
        return child;
      }
    })
  }, [children]);

  useEffect(() => {
    const active = panels.current.querySelector('.active');
    const height = active?.offsetHeight;
    panels.current.style.height = `${height}px`
  }, [selectedTab, windowWidth])

  return (
    <div className={classes} ref={panels} {...rest}>
      {childrenWithIndex}
    </div>
  )
}