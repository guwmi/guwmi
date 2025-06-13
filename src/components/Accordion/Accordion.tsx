// import library functionality
import { useState, PropsWithChildren, useEffect } from 'react';

// import context
import AccordionContext from './AccordionContext';

// component type
export interface AccordionProps extends PropsWithChildren {
  defaultOpen?: string;
  className?: string;
  skeleton?: boolean;
}

/**
 * Accordion component **********************************************************************
 * 
 * @param defaultOpen - (optional) string value of the accordion id to have open by default
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 */

export default function Accordion(props: AccordionProps) {

  const {
    children,
    defaultOpen,
    className,
    skeleton,
    ...rest
  } = props;
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const classes = `guwmi-accordion-container${className ? ' ' + className : ''}`;

  useEffect(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen]);

  return (
    <AccordionContext.Provider value={{ skeleton, openAccordions, setOpenAccordions }}>
      <div className={classes} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}