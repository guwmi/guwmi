// import library functionality
import React, { useMemo, useContext, PropsWithChildren } from 'react';

// import context
import MenuContext from './MenuContext';

// component type
interface ComponentProps extends PropsWithChildren{
  className?: string;
}

// children type
interface ChildType {
  onClick: () => void;
}

/**
 * Menu Trigger component ************************************************************************
 * @param children - ReacElements provided as props
 */

export default function MenuTrigger(props: ComponentProps) {

  const { className, children, ...rest } = props;
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const childrenWithClick = useMemo(() => {
    return React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement<ChildType>, { onClick: () => setIsOpen(!isOpen) }))
  }, [children, isOpen]);
  const classes = `guwmi-menu-trigger${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      {childrenWithClick}
    </div>
  )
}