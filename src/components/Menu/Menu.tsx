// import library functionality
import React, {
  useState,
  useMemo,
  PropsWithChildren,
} from 'react';

// import context
import MenuContext from './MenuContext';

// component type
interface ComponentProps extends PropsWithChildren {
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
  width?: number;
}

export default function Menu(props: ComponentProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { children, position = 'bottom-right', width } = props;
  const classes = useMemo(() => `guwmi-menu-container ${position}`, []);

  return (
    <div className={classes}>
      <MenuContext.Provider value={{isOpen, setIsOpen}}>
        {children}
      </MenuContext.Provider>
    </div>
  )
}