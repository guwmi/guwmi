// import library functionality
import React, { useMemo, useState } from 'react';

// import components
import {
  X,
  AlertCircle,
  AlertTriangle,
  Check
} from 'tabler-icons-react';

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
      <dialog className={classes}>
        {kind === 'error' ? (
          <AlertCircle size={20} />
        ) : kind === 'warning' ? (
          <AlertTriangle size={20} />
        ) : (
          <Check size={20} />
        )}
        <h2>{titleText}</h2>
        <p>{content}</p>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close notification"
          tabIndex={0}
        >
          <X size={18} />
        </button>
      </dialog>
    ) : null 
  )
}