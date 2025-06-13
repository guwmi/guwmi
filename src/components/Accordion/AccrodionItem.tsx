// import library funtionality
import {
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
import Icon from '../Icon/Icon';

// import context
import AccordionContext from './AccordionContext';

// compopnent type
export interface AccordionItemProps extends PropsWithChildren {
  title: string;
  id: string;
  className?: string;
}

/**
 * Accordion item component *****************************************************************
 * 
 * @param title - string value for the accordion title (button that opperates the accordion)
 * @param id - string value for the id of the accordion content
 * @param className - (optional) string value of class names to apply to the component
 */

export default function AccordionItem(props: AccordionItemProps) {

  const {
    children,
    title,
    id,
    className,
    ...rest
  } = props;
  const { skeleton, openAccordions, setOpenAccordions } = useContext(AccordionContext);
  const windowWidth = useWindowWidth();
  const panelRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const classes = `guwmi-accordion-item${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  useEffect(() => {
    if (openAccordions.includes(id)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [openAccordions]);

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
  }, [contentRef.current, isOpen, windowWidth]);

  return (
    <div className={classes} {...rest}>
      <button
        onClick={() => isOpen ? close() : open()}
        id={`guwmi-accordion-controller-${id}`}
        aria-controls={`guwmi-accordion-panel-${id}`}
        aria-expanded={isOpen}
        className={isOpen ? 'active' : null}
      >
        {title}
        <Icon name="chevron-right" size={20} />
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