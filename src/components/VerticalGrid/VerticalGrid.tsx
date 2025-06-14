// import library functionality
import { PropsWithChildren } from 'react';

// component type
export interface VerticalGridProps extends PropsWithChildren {
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  padding?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

/**
 * Vertical Grid component ******************************************************************
 * 
 * @param spacing - (optional) number value of 0-6 sets the vertical spacing in rems - defaults to 1
 * @param padding - (optional) number value of 0-6 sets the padding in rems - defaults to 0
 * @param className - (optional) string value of class names to apply to the component
 * 
 */

export default function VerticalGrid(props: VerticalGridProps) {

  const {
    children,
    spacing = 1,
    padding = 0,
    className,
    ...rest
  } = props;

  const getClasses = () => {
    let classString = 'guwmi-vertical-grid ';
    switch(spacing) {
      case 0:
        classString += 'space-0';
        break;
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

    switch(padding) {
      case 0:
        classString += ' pad-0';
        break;
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