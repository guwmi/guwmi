// import library functionality
import { useEffect, useRef } from 'react';

// component type
export interface SkeletonBlockProps {
  height?: number;
  width?: number;
}

/**
 * Skeleton Block component *****************************************************************
 * 
 * @param height - (optional) number value for the height (in pixels) of the block
 * @param width - (optional) number value for the width (in pixels) of the block
 * 
 */

export default function SkeletonBlock(props: SkeletonBlockProps) {

  const { height, width, ...rest } = props;
  const block = useRef(null);

  useEffect(() => {
    
    if (height) {
      block.current.style.height = `${height}px`;
    }

    if (width) {
      block.current.style.width = `${width}px`;
    }
  }, [height, width])

  return (
    <div className="guwmi-skeleton-block guwmi-skeleton" ref={block} {...rest}></div>
  )
}