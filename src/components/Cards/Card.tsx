// import library functionality
import React, { PropsWithChildren } from 'react';




export default function Card(props: PropsWithChildren) {

  const { children } = props;

  return (
    <div className="guwmi-card">
      {children}
    </div>
  )
}