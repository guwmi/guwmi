// import library functionality
import { PropsWithChildren } from 'react';

// component type
export interface GridProps extends PropsWithChildren {
  columns?: 'auto' | 2 | 3 | 4 | 5 | 6;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  wrap?: 'wrap' | 'no-wrap';
  rowOrder?: 'standard' | 'reverse';
  align?: 'left' | 'right' | 'center';
  className?: string;
}

/**
 * Grid component ****************************************************************************
 * 
 * @param columns - (optional) value of 'auto', 2, 3, 4, 5, or 6 for the number of columns per row - defaults to 3
 * @param spacing - (optional) value of 0, 1, 2, 3, 4, 5, or 6 for the gap spacing between columns - defaults to 1
 * @param wrap - (optional) value of 'wrap' or 'no-wrap' determines if grid should wrap rows or force on one row - defaults to 'wrap'
 * @param rowOrder - (optional) value of 'standard' or 'reverse' dtermines the order of the columns in each row - defaults to 'standard'
 * @param lign - (optional) value of 'left', 'right', or 'center' determines the alignment of columns in a row - defaults to 'left'
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function Grid(props: GridProps) {

  const {
    columns = 3,
    spacing = 1,
    wrap = 'wrap',
    rowOrder = 'standard',
    align = 'left',
    className,
    children,
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