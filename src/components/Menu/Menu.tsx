// import library functionality
import React, { useState, useMemo,  PropsWithChildren } from 'react';

// import context
import MenuContext from './MenuContext';

// component type
interface ComponentProps extends PropsWithChildren {
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
  width?: number;
  ariaLabel: string;
}

/**
 * Menu component **********************************************************************************
 * @param ComponenProps
 */

export default function Menu(props: ComponentProps) {

  const {
    children,
    position = 'bottom-right',
    width,
    ariaLabel,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = useMemo(() => `guwmi-menu-container ${position}`, []);

  return (
    <div className={classes} {...rest}>
      <MenuContext.Provider value={{isOpen, setIsOpen, ariaLabel}}>
        {children}
      </MenuContext.Provider>
    </div>
  )
}