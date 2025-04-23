// import library functionality
import React, { PropsWithChildren } from 'react';




export default function Tab(props: PropsWithChildren) {

  const { children } = props;

  return (
    <div className="guwmi-tab">
      <button className="guwmi-tab-trigger">
        {children}
      </button>
    </div>
  )
}