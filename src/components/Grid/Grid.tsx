// import library functionality
import { PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  columns?: 'auto' | 2 | 3 | 4 | 5 | 6;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  wrap?: 'wrap' | 'no-wrap';
  rowOrder?: 'standard' | 'reverse';
  align?: 'left' | 'right' | 'center';
  className?: string;
}

export default function Grid(props: ComponentProps) {

  const {
    children,
    columns = 3,
    spacing = 1,
    wrap = 'wrap',
    rowOrder = 'standard',
    align = 'left',
    className,
    ...rest
  } = props;

  const getClasses = () => {
    let classString = 'guwmi-grid';
    switch(columns) {
      case 'auto':
        classString += ' auto';
        break;
      case 2:
        classString += ' col-2';
        break;
      case 4:
        classString += ' col-4';
        break;
      case 5:
        classString += ' col-5';
        break;
      case 6:
        classString += ' col-6';
        break;
      default:
        classString += ' col-3';
    }
    switch(spacing) {
      case 0:
        classString += ' space-0';
        break;
      case 2:
        classString += ' space-2';
        break;
      case 3:
        classString += ' space-3';
        break;
      case 4:
        classString += ' space-4';
        break;
      case 5:
        classString += ' space-5';
        break;
      case 6:
        classString += ' space-6';
        break;
      default:
        classString += ' space-1';
    }
    if (wrap === 'no-wrap') {
      classString += ' no-wrap';
    }
    if (rowOrder === 'reverse') {
      classString += ' reverse';
    }
    if (align !== 'left') {
      if (align === 'right') {
        classString += ' right';
      } else if (align === 'center') {
        classString += ' center';
      }
    }
    if (className) {
      classString += ' ' + className;
    }

    return classString;
  };
  const classes = getClasses();

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}