// import library functionality
import React, { useMemo, useContext, PropsWithChildren } from 'react';

// import context
import MenuContext from './MenuContext';

// children type
interface ChildType {
  onClick: () => void;
}

/**
 * Menu Trigger component ************************************************************************
 * @param children - ReacElements provided as props
 */

export default function MenuTrigger(props: PropsWithChildren) {

  const { children, ...rest } = props;
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const childrenWithClick = useMemo(() => React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<ChildType>, { onClick: () => setIsOpen(!isOpen) });
    }
    return child;
  }), [children, isOpen]);

  return (
    <div className="guwmi-menu-trigger" {...rest}>
      {childrenWithClick}
    </div>
  )
}