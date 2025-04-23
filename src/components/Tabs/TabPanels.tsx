// import library functionality
import React, { useMemo, PropsWithChildren } from 'react';

// child type
interface ChildType {
  index: number;
}

export default function TabPanels(props: PropsWithChildren) {

  const { children } = props;
  const childrenWithIndex = useMemo(() => {
    return React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as React.ReactElement<ChildType>, { index: index });
      }
      return child;
    })
  }, [children])

  return (
    <div className="guwmi-tab-panels">
      {childrenWithIndex}
    </div>
  )
}