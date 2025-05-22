// import library functionality
import React, { PropsWithChildren } from 'react';

export default function CardSection(props: PropsWithChildren) {

  const { children, ...rest } = props;

  return (
    <div className="guwmi-card-section" {...rest}>
      {children}
    </div>
  )
}