// import library functionality
import React, {
  useEffect,
  useMemo,
  useRef,
  useContext,
  PropsWithChildren
} from 'react';

// import context
import TabsContext from './TabsContext';

// child type
interface ChildType {
  index: number;
}

export default function Tabs(props: PropsWithChildren) {

  const { children } = props;
  const { selectedTab } = useContext(TabsContext);
  const tabsContainer = useRef(null);
  const slider = useRef(null);
  const activeTab = useRef(null);
  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<ChildType>, { index: index });
      }
      return child;
    })
  }, [children])

  useEffect(() => {
    if (tabsContainer.current.querySelector('.guwmi-tab.active')) {
      activeTab.current = tabsContainer.current.querySelector('.guwmi-tab.active')
    }
  }, [tabsContainer, selectedTab])

  useEffect(() => {
    if (activeTab.current) {
      const left = activeTab.current.offsetLeft;
      const width = activeTab.current.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [activeTab.current])

  return (
    <nav className="guwmi-tabs" role="tablist" ref={tabsContainer}>
      <span className="guwmi-tabs-slider" ref={slider}></span>
      {childrenWithIndex}
    </nav>
  )
}