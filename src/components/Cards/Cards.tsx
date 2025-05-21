// import library functionality
import React, { useMemo, PropsWithChildren } from 'react';

// component type
interface ComponentProps extends PropsWithChildren {
  columns?: 2 | 3 | 4 | 5 | 6;
}

export default function Cards(props: ComponentProps) {

  const { children, columns = 3 } = props;

  const classes = useMemo(() => {
    let classString = 'guwmi-card-grid ';
    switch(columns) {
      case 2:
        classString += 'two';
        break;
      case 4:
        classString += 'four';
        break;
      case 5:
        classString += 'five';
        break;
      case 6:
        classString += 'six';
        break;
      default:
        classString += 'three';
    }
    return classString;
  }, [columns]);

  return (
    <div className={classes} data-testid="guwmi-card-grid">
      {children}
    </div>
  )
}