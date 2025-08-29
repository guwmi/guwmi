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
 * @param align - (optional) value of 'left', 'right', or 'center' determines the alignment of columns in a row - defaults to 'left'
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

  const classes = [
    'guwmi-grid',
    columns === 'auto' ? 'auto' : `col-${columns}`,
    spacing === 1 ? 'space-1' : `space-${spacing}`,
    wrap === 'no-wrap' && 'no-wrap',
    rowOrder === 'reverse' && 'reverse',
    align !== 'left' && align,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}