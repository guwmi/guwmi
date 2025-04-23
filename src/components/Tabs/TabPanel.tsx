// import library functionality
import React, { PropsWithChildren } from 'react';




export default function TabPanel(props: PropsWithChildren) {

  const { children } = props;

  return (
    <div className="guwmi-tabl-panel">
      {children}
    </div>
  )
}