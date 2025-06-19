// import library functionality
import React, { useMemo, useContext, PropsWithChildren } from 'react';

// import context
import MenuContext from './MenuContext';

// import button type
import { ButtonProps } from '../../components/Button/Button';

// component type
export interface MenuTriggerProps extends PropsWithChildren{
  className?: string;
}

/**
 * Menu Trigger component *******************************************************************
 * 
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function MenuTrigger(props: MenuTriggerProps) {

  const { className, children, ...rest } = props;
  const { isOpen, setIsOpen } = useContext(MenuContext);
  const childrenWithClick = useMemo(() => {
    return React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement<ButtonProps>, { onClick: () => setIsOpen(!isOpen) }))
  }, [children, isOpen]);
  const classes = `guwmi-menu-trigger${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      {childrenWithClick}
    </div>
  )
}