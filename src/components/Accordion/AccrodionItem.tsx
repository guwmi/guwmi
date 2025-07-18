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
 * 
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
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [styles, setStyles] = useState<React.CSSProperties>({height: '0px', minHeight: '0px'});
  const isOpen = openAccordions.includes(id);
  const classes = `guwmi-accordion-item${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;

  const onAnimationEnd = useCallback(() => setIsAnimating(false), []);

  const open = useCallback(() => {
    setOpenAccordions([...openAccordions, id]);
    setIsAnimating(true);
  }, [id, openAccordions]);

  const close = useCallback(() => {
    setOpenAccordions(openAccordions.filter((value: string) => value !== id));
    setIsAnimating(true);
  }, [id, openAccordions]);

  useEffect(() => {
    panelRef.current?.addEventListener('transitioncancel', onAnimationEnd);
    panelRef.current?.addEventListener('transitionend', onAnimationEnd);

    return () => {
      panelRef.current?.removeEventListener('transitioncancel', onAnimationEnd);
      panelRef.current?.removeEventListener('transitionend', onAnimationEnd);
    }
  }, []);

  useEffect(() => {
    if (!isAnimating && styles.height !== '0px') {
      setStyles({...styles, height: 'auto'});
    }
  }, [isAnimating]);

  useEffect(() => {
    if (contentRef.current && isOpen) {
      const height = contentRef.current.offsetHeight;
      setStyles({height: height, minHeight: height});
    } else {
      setStyles({height: '0px', minHeight: '0px'});
    }
  }, [isOpen, windowWidth]);

  return (
    <div className={classes} {...rest}>
      <button
        onClick={() => isOpen ? close() : open()}
        id={`guwmi-accordion-controller-${id}`}
        aria-controls={`guwmi-accordion-panel-${id}`}
        aria-expanded={isOpen}
        className={isOpen ? 'active' : null}
        tabIndex={skeleton ? -1 : 0}
      >
        {title}
        <Icon name="chevron-right" size={20} />
      </button>
      <section
        hidden={(!isOpen && !isAnimating)}
        id={`guwmi-accordion-panel-${id}`}
        aria-labelledby={`guwmi-accordion-controller-${id}`}
        ref={panelRef}
        style={styles}
      >
        <div className="guwmi-accordion-panel-content" ref={contentRef}>
         {children}
        </div>
      </section>
    </div>
  )
}