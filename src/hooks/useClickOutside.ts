// import library functionality
import { useCallback, useEffect, useRef, RefObject } from 'react';

// component type
type Hook = ( enabled: boolean, onClick: () => void, elementRef: RefObject<HTMLElement> ) => void;

const useClickOutside: Hook = (enabled, onClick, elementRef) => {

  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeOutClick = useCallback((e: MouseEvent) => {
    if (e.target !== triggerRef.current && !elementRef.current?.contains(e.target as Node)) {
      onClick();
    }
  }, [elementRef.current]);

  useEffect(() => {

    if (enabled) {
      triggerRef.current = document.activeElement as HTMLButtonElement;
      document.addEventListener('click', closeOutClick);
    } else {
      triggerRef.current?.focus();
      document.removeEventListener('click', closeOutClick);
    }

    return () => {
      document.removeEventListener('click', closeOutClick);
    }
  }, [enabled]);
}

export default useClickOutside;