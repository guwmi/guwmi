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

// component type
interface ComponentProps extends PropsWithChildren {
  className?: string;
}

// child type
interface ChildType {
  index: number;
}

export default function Tabs(props: ComponentProps) {

  const { className, children, ...rest } = props;
  const { skeleton, selectedTab } = useContext(TabsContext);
  const tabsContainer = useRef(null);
  const slider = useRef(null);
  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => React.cloneElement(child as React.ReactElement<ChildType>, { index: index }))
  }, [children])
  const classes = `guwmi-tabs${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  useEffect(() => {
    if (tabsContainer.current.querySelector('.guwmi-tab.active')) {
      const activeTab = tabsContainer.current.querySelector('.guwmi-tab.active');
      const left = activeTab.offsetLeft;
      const width = activeTab.offsetWidth;
      slider.current.style.width = `${width}px`;
      slider.current.style.left = `${left}px`;
    }
  }, [tabsContainer, selectedTab])

  return (
    <nav className={classes} role="tablist" ref={tabsContainer} {...rest}>
      <span className="guwmi-tabs-slider" ref={slider}></span>
      {childrenWithIndex}
    </nav>
  )
}