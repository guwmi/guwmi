// import library functionality
import { PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  title?: string;
  subTitle?: string;
  image?: string;
  className?: string;
}

export default function Card(props: ComponentProps) {

  const {
    title,
    subTitle,
    image,
    className,
    children,
    ...rest
  } = props;
  const classes = `guwmi-card${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
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