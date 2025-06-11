// import library functionality
import { useState, PropsWithChildren } from 'react';

// import context
import MenuContext from './MenuContext';

// component type
interface ComponentProps extends PropsWithChildren {
  position?: 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left';
  width?: number;
  ariaLabel: string;
  className?: string;
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
    className,
    ...rest
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classes = `guwmi-menu-container ${position}${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      <MenuContext.Provider value={{isOpen, setIsOpen, ariaLabel}}>
        {children}
      </MenuContext.Provider>
    </div>
  )
}