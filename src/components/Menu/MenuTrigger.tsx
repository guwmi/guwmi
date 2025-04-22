// import library functionality
import React, { useContext, PropsWithChildren, JSXElementConstructor } from 'react'

// import context
import MenuContext from './MenuContext';

// child prop type
interface ChildType {
  onClick: () => void;
}

export default function MenuTrigger(props: PropsWithChildren) {

  const { children } = props;
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const childrenWithClick = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<ChildType>, { onClick: () => setIsOpen(!isOpen) });
    }
    return child;
  });

  return (
    <div className="guwmi-menu-trigger">
      {childrenWithClick}
    </div>
  )
}