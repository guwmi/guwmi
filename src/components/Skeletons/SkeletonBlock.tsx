// import library functionality
import { useEffect, useRef } from 'react';

// component type
export interface SkeletonBlockProps {
  height?: number;
  width?: number;
  className?: string;
}

/**
 * Skeleton Block component *****************************************************************
 * 
 * @param className - (optional) string value for the className of the component
 * @param height - (optional) number value for the height (in pixels) of the block
 * @param width - (optional) number value for the width (in pixels) of the block
 * 
 */

export default function SkeletonBlock(props: SkeletonBlockProps) {

  const { height, width, className, ...rest } = props;
  const block = useRef(null);
  const classes = `guwmi-skeleton-block guwmi-skeleton${className ? ' ' + className : ''}`;

  useEffect(() => {
    
    if (height) {
      block.current.style.height = `${height}px`;
    }

    if (width) {
      block.current.style.width = `${width}px`;
    }
  }, [height, width])

  return (
    <div className={classes} ref={block} {...rest}></div>
  )
}