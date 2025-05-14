// import library functionality
import { useEffect, useState, useRef, RefObject } from 'react';

// hook types
interface Return { isVisible: boolean; }
type Hook = (componentState: boolean, classString: string, elementRef: RefObject<HTMLElement>) => Return

const useAnimation: Hook = (componentState, classString, elementRef) => {

  const [isInDOM, setIsInDOM] = useState<boolean>(componentState);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const initialLoad = useRef<boolean>(true);

  const handleAnimation = () => {
    setIsAnimating(false);
  }

  const toggleClass = () => {
    if (!initialLoad.current) {
      setIsAnimating(true);
      if (componentState) {
        elementRef.current?.classList.add(classString);
      } else {
        elementRef.current?.classList.remove(classString);
      }
    }
  }

  useEffect(() => {
    if (componentState) {
      setIsInDOM(true);
    } else {
      toggleClass();
    }
  }, [componentState])

  useEffect(() => {
    if (isInDOM) {
      setTimeout(() => toggleClass(), 25);
    }
  }, [isInDOM])

  useEffect(() => {
    if (!componentState && !isAnimating) {
      setIsInDOM(false);
    }
  }, [componentState, isAnimating]);

  useEffect(() => {
    elementRef.current?.addEventListener('transitioncancel', handleAnimation);
    elementRef.current?.addEventListener('transitionend', handleAnimation);

    return () => {
      elementRef.current?.removeEventListener('transitioncancel', handleAnimation);
      elementRef.current?.removeEventListener('transitionend', handleAnimation);
    }
  }, [elementRef.current])

  useEffect(() => {
    initialLoad.current = false;
  }, []);

  return { isVisible: isInDOM || isAnimating };
}

export default useAnimation;