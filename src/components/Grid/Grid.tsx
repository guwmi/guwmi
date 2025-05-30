// import library functionality
import React, { useMemo, PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  columns?: 'auto' | 2 | 3 | 4 | 5 | 6;
  wrap?: 'wrap' | 'no-wrap';
  rowOrder?: 'standard' | 'reverse';
  align?: 'left' | 'right' | 'center';
}

export default function Grid(props: ComponentProps) {

  const {
    children,
    columns = 3,
    wrap = 'wrap',
    rowOrder = 'standard',
    align = 'left',
    ...rest
  } = props;

  const classes = useMemo(() => {
    let classString = 'guwmi-grid';
    switch(columns) {
      case 'auto':
        classString += ' auto';
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
    return classString;
  }, [columns, wrap, rowOrder, align]);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}