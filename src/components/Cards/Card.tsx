// import library functionality
import React, { PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  title?: string;
  subTitle?: string;
  image?: string;
}

export default function Card(props: ComponentProps) {

  const {
    title,
    subTitle,
    image,
    children
  } = props;

  return (
    <div className="guwmi-card" data-testid="guwmi-card">
      {image && 
        <img src={image} alt={title ? title : 'Card image'} className="guwmi-card-image" data-testid="guwmi-card-image" />
      }
      {(title || subTitle) &&
        <div className="guwmi-card-section guwmi-card-title">
          {title && 
            <h2 data-testid="guwmi-card-title">{title}</h2>
          }
          {subTitle && 
            <h3 data-testid="guwmi-card-sub-title">{subTitle}</h3>
          }
        </div>
      }
      {children}
    </div>
  )
}