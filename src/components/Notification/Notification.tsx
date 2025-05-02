// import library functionality
import React, { useMemo, useState } from 'react';

// import component
import { IconX, IconAlertCircle, IconAlertTriangle, IconCheck } from '@tabler/icons-react';

// component type
interface ComponentProps {
  kind: 'error' | 'warning' | 'success';
  title?: string;
  content: string;
}

export default function Notification(props: ComponentProps) {

  const { kind, title, content } = props;
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const titleText = useMemo(() => title ? title : kind.charAt(0).toUpperCase() + kind.slice(1), [title, kind]);
  const classes = useMemo(() => `guwmi-notification ${kind}`, [kind]);

  return (
    isVisible ? (
      <div className={classes}>
        {kind === 'error' ? (
          <IconAlertCircle size={20} stroke={3} />
        ) : kind === 'warning' ? (
          <IconAlertTriangle size={20} stroke={3} />
        ) : (
          <IconCheck size={20} stroke={3} />
        )}
        <h2>{titleText}</h2>
        <p>{content}</p>
        <button onClick={() => setIsVisible(false)} aria-label="Close notification"><IconX size={18} /></button>
      </div>
    ) : null 
  )
}