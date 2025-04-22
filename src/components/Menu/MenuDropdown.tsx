// import library functionality
import React, { useMemo, PropsWithChildren, useContext } from 'react'

// import context
import MenuContext from './MenuContext';

export default function MenuDropdown(props: PropsWithChildren) {

  const { children } = props;
  const { isOpen } = useContext(MenuContext);
  const classes = useMemo(() => `guwmi-menu-dropdown${isOpen ? ' open' : ''}`, [isOpen]);

  return (
    <>
      {isOpen &&
        <ul className={classes}>
          {children}
        </ul>
      }
    </>
  )
}