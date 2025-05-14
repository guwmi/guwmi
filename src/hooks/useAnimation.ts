'use client'

// import library functionality
import { useEffect, useState, useRef, RefObject } from 'react';

// hook types
interface Return { isVisible: boolean; }
type Hook = (componentState: boolean, classString: string, elementRef: RefObject<HTMLElement>) => Return

const useAnimation: Hook = (componentState, classString, elementRef) => {

  const [isInDOM, setIsInDOM] = useState<boolean>(componentState);
  const [hasClass, setHasClass] = useState<boolean>(false);
  const initialLoad = useRef<boolean>(true);
  const listnerAdded = useRef<boolean>(false);

  const setClassState = () => {
    if (elementRef.current) {
      const classExists = Array.from(elementRef.current?.classList)?.includes(classString);
      setHasClass(classExists);
    }
  }

  const toggleClass = () => {
    if (componentState) {
      if (!listnerAdded.current) {
        elementRef.current?.addEventListener('transitioncancel', setClassState);
        elementRef.current?.addEventListener('transitionend', setClassState);
        listnerAdded.current = true;
      }
      elementRef.current?.classList.add(classString);
    } else {
      elementRef.current?.classList.remove(classString);
      listnerAdded.current = false;
    }
  }

  useEffect(() => {
    initialLoad.current = false;
  }, []);

  useEffect(() => {
    if (!initialLoad.current) {
      if (componentState && !isInDOM) {
        setIsInDOM(true);
      } else if (componentState && isInDOM && !hasClass) {
        setTimeout(() => toggleClass(), 25);
      } else if (!componentState && isInDOM && hasClass) {
        toggleClass();
      } else if (!componentState && isInDOM && !hasClass) {
        setIsInDOM(false);
      }
    }
  }, [componentState, isInDOM, hasClass]);

  return { isVisible: isInDOM || hasClass };
}

export default useAnimation;