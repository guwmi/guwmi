// import library functionality
import { useEffect } from 'react';

// component type
type Hook = ( open: boolean, enabled: boolean ) => void;

const usePreventScroll: Hook = (open, enabled) => {

  useEffect(() => {

    if (open) {
      if (enabled) {
        document.body.style.height = '100%';
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (enabled) {
        document.body.removeAttribute('style');
      }
    }
  }, [open]);
}

export default usePreventScroll;