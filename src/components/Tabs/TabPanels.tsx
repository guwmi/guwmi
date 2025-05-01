// import library functionality
import React, {
  useContext,
  useMemo,
  useRef,
  useEffect,
  PropsWithChildren
} from 'react';

// import context
import TabsContext from './TabsContext';

// child type
interface ChildType {
  index: number;
}

export default function TabPanels(props: PropsWithChildren) {

  const { children } = props;
  const { selectedTab } = useContext(TabsContext);
  const panels = useRef(null);

  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<ChildType>, { index: index });
      }
      return child;
    })
  }, [children]);

  useEffect(() => {
    const active = panels.current.querySelector('.active');
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`
  }, [selectedTab])

  return (
    <div className="guwmi-tab-panels" ref={panels}>
      {childrenWithIndex}
    </div>
  )
}