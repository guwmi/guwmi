// import library functionality
import { useMemo, useState } from 'react';

// import components
import Icon from '../Icon/Icon';

// component type
interface ComponentProps {
  kind: 'error' | 'warning' | 'success' | 'info';
  title?: string;
  content: string;
}

export default function Notification(props: ComponentProps) {

  const { kind, title, content, ...rest } = props;
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const titleText = useMemo(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = useMemo(() => `guwmi-notification ${kind}`, [kind]);

  return (
    isVisible ? (
      <dialog className={classes} {...rest}>
        {kind === 'error' ? (
          <Icon name="alert-circle" size={20} stroke="3" />
        ) : kind === 'warning' ? (
          <Icon name="alert-triangle" size={20} stroke="3" />
        ) : kind === 'info' ? (
          <Icon name="info" size={20} stroke="3" />
        ) : (
          <Icon name="check" size={20} stroke="3" />
        )}
        <h2>{titleText}</h2>
        <p>{content}</p>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close notification"
          tabIndex={0}
        >
          <Icon name="close" size={18} />
        </button>
      </dialog>
    ) : null 
  )
}