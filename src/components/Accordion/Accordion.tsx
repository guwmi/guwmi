// import library functionality
import { useState, PropsWithChildren, useEffect } from 'react';

// import context
import AccordionContext from './AccordionContext';

// component type
interface ComponentProps extends PropsWithChildren {
  defaultOpen?: string;
}

export default function Accordion(props: ComponentProps) {

  const { children, defaultOpen, ...rest } = props;
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  useEffect(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen])

  return (
    <AccordionContext.Provider value={{ openAccordions, setOpenAccordions }}>
      <div className="guwmi-accordion-container" {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}