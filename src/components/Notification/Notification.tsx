// import library functionality
import React, { useMemo, useState } from 'react';

// import component
import { IconX } from '@tabler/icons-react';

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
        <button onClick={() => setIsVisible(false)}><IconX /></button>
        <h2>{titleText}</h2>
        <p>{content}</p>
      </div>
    ) : null 
  )
}