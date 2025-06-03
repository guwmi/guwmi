// import library functionality
import { useMemo, PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  spacing?: 1 | 2 | 3 | 4 | 5 | 6;
  padding?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export default function VerticalGrid(props: ComponentProps) {

  const {
    children,
    spacing = 2,
    padding,
    className,
    ...rest
  } = props;

  const classes = useMemo(() => {
    let classString = 'guwmi-vertical-grid ';
    switch(spacing) {
      case 1:
        classString += 'space-1';
        break;
      case 3:
        classString += 'space-3';
        break;
      case 4:
        classString += 'space-4';
        break;
      case 5:
        classString += 'space-5';
        break;
      case 6:
        classString += 'space-6';
        break;
      default:
        classString += 'space-2';
    }

    if (padding) {
      switch(padding) {
        case 1:
          classString += ' pad-1';
          break;
        case 3:
          classString += ' pad-3';
          break;
        case 4:
          classString += ' pad-4';
          break;
        case 5:
          classString += ' pad-5';
          break;
        case 6:
          classString += ' pad-6';
          break;
        default:
          classString += ' pad-2';
      }
    }

    if (className) {
      classString += ' ' + className;
    }

    return classString;
  }, [spacing]);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}