// import library functionality
import {
  useMemo,
  useRef,
  PropsWithChildren
} from 'react';

// component type
interface CompoentProps extends PropsWithChildren {
  text: string;
  align?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}

export default function Tooltip(props: CompoentProps) {

  const {
    text,
    align = 'bottom',
    className,
    children,
    ...rest
  } = props;
  const classes = useMemo(() => `guwmi-tooltip ${align}${className ? ' ' + className : ''}`, [align, className]);

  return (
    <div className={classes} {...rest}>
      <span>{text}</span>
      {children}
    </div>
  )
}