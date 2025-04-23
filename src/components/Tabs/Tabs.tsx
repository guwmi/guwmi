// import library functionality
import React, { PropsWithChildren } from 'react';




export default function Tabs(props: PropsWithChildren) {

  const { children } = props;

  return (
    <div className="guwmi-tabs">
      {children}
    </div>
  )
}