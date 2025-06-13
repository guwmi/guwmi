// import library functionality
import { useEffect, useRef } from 'react';

// component type
interface ComponentProps {
  height?: number;
  width?: number;
}

export default function SkeletonBlock(props: ComponentProps) {

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