// import library functionality
import { PropsWithChildren } from 'react';

// component type
export interface CardProps extends PropsWithChildren {
  title?: string;
  subTitle?: string;
  image?: string;
  imageAlt?: string;
  imageHeight?: number;
  className?: string;
  skeleton?: boolean;
}

/**
 * Card component ***************************************************************************
 * 
 * @param title - (optional) string value for the title of the card - renders as <h2> element
 * @param subTitle - (optional) string value for the sub title of the card - renders as an <h3> element
 * @param image - (optional) string value for the url of an image for the card
 * @param imageAlt - (optional) string value for the alt tag on the card image
 * @param imageHeight - (optional) number value for the height in pixels for the card image
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function Card(props: CardProps) {

  const {
    title,
    subTitle,
    image,
    imageAlt,
    imageHeight,
    className,
    children,
    skeleton,
    ...rest
  } = props;
  const classes = `guwmi-card${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  return (
    <div className={classes} {...rest}>
      {image && 
        <img src={image} alt={imageAlt ?? ''} style={imageHeight ? {height: `${imageHeight}px`} : undefined} className="guwmi-card-image" />
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