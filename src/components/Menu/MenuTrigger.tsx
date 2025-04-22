// import library functionality
import React, { useContext, PropsWithChildren } from 'react'

// import context
import MenuContext from './MenuContext'

export default function MenuTrigger(props: PropsWithChildren) {

  const { children } = props;
  const { isOpen, setIsOpen } = useContext(MenuContext);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>{children}</button>
  )
}