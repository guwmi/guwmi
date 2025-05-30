// import library functionality
import { useMemo, PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  spacing?: 1 | 2 | 3 | 4 | 5 | 6;
}

export default function VerticalGrid(props: ComponentProps) {

  const {
    children,
    spacing = 2,
    ...rest
  } = props;

  const classes = useMemo(() => {
    let classString = 'guwmi-vertical-grid';
    switch(spacing) {
      case 1:
        classString += ' one';
        break;
      case 2:
        classString += ' two';
        break;
      case 4:
        classString += ' four';
        break;
      case 5:
        classString += ' five';
        break;
      case 6:
        classString += ' six';
        break;
      default:
        classString += ' three';
    }
    return classString;
  }, [spacing]);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}