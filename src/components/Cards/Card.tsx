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
    children,
    ...rest
  } = props;

  return (
    <div className="guwmi-card" {...rest}>
      {image && 
        <img src={image} alt={title ? 'Image that represents ' + title : 'Image representing the content for this card'} className="guwmi-card-image" />
      }
      {(title || subTitle) &&
        <div className="guwmi-card-section guwmi-card-title">
          {title && 
            <h2>{title}</h2>
          }
          {subTitle && 
            <h3>{subTitle}</h3>
          }
        </div>
      }
      {children}
    </div>
  )
}