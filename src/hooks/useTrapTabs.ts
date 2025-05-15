// import library functionality
import { useCallback, useEffect, useRef, RefObject } from 'react';

// component type
type Hook = ( open: boolean, onClose: () => void, elementRef: RefObject<HTMLElement> ) => void;

const useTrapTabs: Hook = (open, onClose, elementRef) => {

  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleTab = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      const focusableElements: NodeListOf<HTMLFormElement> = elementRef.current.querySelectorAll('a[href], button, input, textarea, select, details, [tabindex]');
      const firstFocusable: HTMLFormElement = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      if (e.shiftKey) {
        if (elementRef.current?.contains(e.target as Node) && e.target === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (elementRef.current?.contains(e.target as Node) && e.target === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  }, [elementRef.current]);

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  }, []);

  useEffect(() => {

    if (open) {
      triggerRef.current = document.activeElement as HTMLButtonElement;
      setTimeout(() => elementRef.current?.focus(), 25);
      document.addEventListener('keydown', handleTab);
      document.addEventListener('keydown', handleEscape);
    } else {
      triggerRef.current?.focus();
      document.removeEventListener('keydown', handleTab);
      document.removeEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleTab);
      document.removeEventListener('keydown', handleEscape);
    }
  }, [open]);
}

export default useTrapTabs;