// import library functionality
import { useCallback, useEffect, useRef, RefObject } from 'react';

// component type
type Hook = ( open: boolean, onClose: () => void, elementRef: RefObject<HTMLElement> ) => void;

const useCloseOutClick: Hook = (open, onClose, elementRef) => {

  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeOutClick = useCallback((e: MouseEvent) => {
    if (e.target !== triggerRef.current && !elementRef.current?.contains(e.target as Node)) {
      onClose();
    }
  }, [elementRef.current]);

  useEffect(() => {

    if (open) {
      triggerRef.current = document.activeElement as HTMLButtonElement;
      document.addEventListener('click', closeOutClick);
    } else {
      triggerRef.current?.focus();
      document.removeEventListener('click', closeOutClick);
    }

    return () => {
      document.removeEventListener('click', closeOutClick);
    }
  }, [open]);
}

export default useCloseOutClick;