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

// component type
interface ComponentProps extends PropsWithChildren {
  className?: string;
}

// child type
interface ChildType {
  index: number;
}

export default function TabPanels(props: ComponentProps) {

  const { className, children, ...rest } = props;
  const { selectedTab } = useContext(TabsContext);
  const windowWidth = useWindowWidth();
  const panels = useRef(null);
  const classes = `guwmi-tab-panels${className ? ' ' + className : ''}`;

  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => React.cloneElement(child as React.ReactElement<ChildType>, { index: index }))
  }, [children]);

  useEffect(() => {
    const active = panels.current.querySelector('.active');
    const height = active.offsetHeight;
    panels.current.style.height = `${height}px`
  }, [selectedTab, windowWidth])

  return (
    <div className={classes} ref={panels} {...rest}>
      {childrenWithIndex}
    </div>
  )
}