// import library functionality
import { useState, useEffect } from 'react';

export default function useWindowWidth() {

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowWidth;
}