// import library functionality
import { useState } from 'react';

// import components
import Icon from '../Icon/Icon';

// import types
import { IconName } from '../Icon/Icon';

// component type
interface NotificationProps {
  kind?: 
  | 'error'
  | 'warning'
  | 'success'
  | 'info';
  title?: string;
  content: string;
  className?: string
}

/**
 * 
 * @param kind - (optional) value of 'error', 'warning', 'success', or 'info' determines styling and icon - defaults to 'info'
 * @param title - (optional) string value for the notification title - defaults to the kind value
 * @param content - string value for the content of the notification
 * @param className - (optional) string value of class names to apply to the component
 */

export default function Notification(props: NotificationProps) {

  const {
    kind = 'info',
    title,
    content,
    className,
    ...rest
  } = props;
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const titleText = title ? title : kind.charAt(0).toUpperCase() + kind.slice(1);
  const classes =`guwmi-notification ${kind}${className ? ' ' + className : ''}`;

  const getIconName = () => {
    switch(kind) {
      case 'error':
        return 'alert-square';
      case 'warning':
        return 'alert-triangle';
      case 'success':
        return 'check';
      case 'info':
        return 'info';
    }
  }
  const iconName: IconName = getIconName();

  return (
    isVisible ? (
      <dialog className={classes} {...rest}>
        <Icon name={iconName} size={20} stroke="3" />
        <h2>{titleText}</h2>
        <p>{content}</p>
        <button onClick={() => setIsVisible(false)} aria-label="Close notification">
          <Icon name="close" size={18} />
        </button>
      </dialog>
    ) : null 
  )
}