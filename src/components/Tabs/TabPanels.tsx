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

// child type
interface ChildType {
  index: number;
}

export default function TabPanels(props: PropsWithChildren) {

  const { children, ...rest } = props;
  const { selectedTab } = useContext(TabsContext);
  const windowWidth = useWindowWidth();
  const panels = useRef(null);

  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => React.cloneElement(child as React.ReactElement<ChildType>, { index: index }))
  }, [children]);

  useEffect(() => {
    const active = panels.current.querySelector('.active');
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`
  }, [selectedTab, windowWidth])

  return (
    <div className="guwmi-tab-panels" ref={panels} {...rest}>
      {childrenWithIndex}
    </div>
  )
}