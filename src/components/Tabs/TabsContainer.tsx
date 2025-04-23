// import library functionality
import React, { PropsWithChildren } from 'react';



export default function TabsContainer(props: PropsWithChildren) {

  const { children } = props;

  return (
    <div className="guwmi-tabs-container">
      {children}
    </div>
  )
}