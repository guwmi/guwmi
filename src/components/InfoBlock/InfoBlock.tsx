// import library functionalit
import { PropsWithChildren } from 'react';

// import components
import Icon from '../../components/Icon/Icon';

// component type
export interface InfoBlockProps extends PropsWithChildren {
  label?: string;
  kind?: 'danger' | 'warning' | 'success' | 'info';
  className?: string;
  skeleton?: boolean;
}

/**
 * Info Block component ********************************************************************
 * 
 * @param label - optional string value for the label for the block - defaults to the kind value
 * @param kind - (optional) value of 'danger', 'warning', 'success', or 'info' determines the style and icon displayed - defaults to 'info'
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function InfoBlock(props: InfoBlockProps) {

  const {
    label,
    kind = 'info',
    className,
    skeleton,
    children,
    ...rest
  } = props;
  const classes = `guwmi-info-block ${kind}${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  const getIconName = () => {
    switch(kind) {
    case 'danger':
      return 'alert-square';
    case 'warning':
      return 'alert-triangle';
    case 'success':
      return 'check'
    default:
      return 'info';
    }
  };

  const iconName = getIconName();

  return (
    <div className={classes} {...rest}>
      <div><Icon name={iconName} /></div>
      <div>
        {label && <h2 className="guwmi-info-block-label">{label}</h2>}
        {children}
      </div>
    </div>
  )
}