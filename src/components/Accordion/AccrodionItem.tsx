// import library funtionality
import React, {
  useCallback,
  useContext,
  useRef,
  useState,
  useEffect,
  PropsWithChildren
} from 'react';

// import custom functionality
import useWindowWidth from '../../hooks/useWindowWidth';

// import components
import { ChevronRight } from 'tabler-icons-react';

// import context
import AccordionContext from './AccordionContext';

// compopnent type
interface ComponentProps extends PropsWithChildren {
  title: string;
  id: string;
}

export default function AccordionItem(props: ComponentProps) {

  const { children, title, id } = props;
  const { openAccordions, setOpenAccordions } = useContext(AccordionContext);
  const windowWidth = useWindowWidth();
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (openAccordions.includes(id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openAccordions])

  const open = useCallback(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);

  const close = useCallback(() => {
    setOpenAccordions(openAccordions.filter((value: string) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);

  useEffect(() => {
    panelRef.current?.addEventListener('transitioncancel', () => setIsAnimating(false));
    panelRef.current?.addEventListener('transitionend', () => setIsAnimating(false));
  }, [panelRef.current]);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      panelRef.current.style.height = `${height}px`;
    } else {
      panelRef.current.style.height = `0px`;
    }
  }, [contentRef.current, isOpen, windowWidth])

  return (
    <div className="guwmi-accordion-item">
      <button
        onClick={() => isOpen ? close() : open()}
        id={`guwmi-accordion-controller-${id}`}
        aria-controls={`guwmi-accordion-panel-${id}`}
        aria-expanded={isOpen}
        className={isOpen ? 'active' : null}
      >
        {title}
        <ChevronRight size={20} />
      </button>
      <section
        hidden={(!isOpen && !isAnimating)}
        id={`guwmi-accordion-panel-${id}`}
        aria-labelledby={`guwmi-accordion-controller-${id}`}
        ref={panelRef}
      >
        <div className="guwmi-accordion-panel-content" ref={contentRef}>
         {children}
        </div>
      </section>
    </div>
  )
}