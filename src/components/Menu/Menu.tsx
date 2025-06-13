// import library functionality
import { useState, PropsWithChildren } from 'react';

// import context
import MenuContext from './MenuContext';

// component type
export interface MenuProps extends PropsWithChildren {
  position?: 
  | 'top-right'
  | 'top-center'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'bottom-left';
  width?: number;
  ariaLabel: string;
  className?: string;
}

/**
 * Menu component **********************************************************************************
 * @param position - (optional) string value for the menu position.  options are:
 * * 'top-right'
 * * 'top-center'
 * * 'top-left'
 * * 'bottom-right'
 * * 'bottom-center'
 * * 'bottom-left';
 * @param width - (optional) number value for the width of the menu - defaults to auto width
 * @param ariaLabel - string value for the aria-lable fot he nav element
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function Menu(props: MenuProps) {

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