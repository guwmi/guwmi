// import library functionalit
import { useMemo, PropsWithChildren } from 'react';

// import components
import Icon from '../../components/Icon/Icon';

// component type
interface ComponentProps extends PropsWithChildren {
  label?: string;
}

export default function InfoBlock(props: ComponentProps) {

  const { label, children, ...rest } = props;

  return (
    <div className="guwmi-info-block" {...rest}>
      <div><Icon name="info" /></div>
      <div>
        {label && <h2 className="guwmi-info-block-label">{label}</h2>}
        {children}
      </div>
    </div>
  )
}