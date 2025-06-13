// import library functionality
import { PropsWithChildren } from 'react';

// component type
export interface CardProps extends PropsWithChildren {
  title?: string;
  subTitle?: string;
  image?: string;
  className?: string;
  skeleton?: boolean;
}

/**
 * Card component ***************************************************************************
 * 
 * @param title - (optional) string value for the title of the card - renders as <h2> element
 * @param subTitle - (optional) string value for the sub title of the card - renders as an <h3> element
 * @param image - (optional) string value for the url of an image for the card
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function Card(props: CardProps) {

  const {
    title,
    subTitle,
    image,
    className,
    children,
    skeleton,
    ...rest
  } = props;
  const classes = `guwmi-card${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

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