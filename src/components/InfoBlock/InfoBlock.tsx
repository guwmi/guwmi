// import library functionalit
import { useMemo, PropsWithChildren } from 'react';

// import components
import Icon from '../../components/Icon/Icon';

// component type
interface ComponentProps extends PropsWithChildren {
  label?: string;
  kind?: 'danger' | 'warning' | 'success' | 'info';
  className?: string;
  skeleton?: boolean;
}

export default function InfoBlock(props: ComponentProps) {

  const {
    kind = 'info',
    label,
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
  }
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