// import library functionality
import React, { useState, PropsWithChildren, useEffect } from 'react';

// import context
import AccordionContext from './AccordionContext';

// component type
interface ComponentProps extends PropsWithChildren {
  defaultOpen?: string;
}

export default function Accordion(props: ComponentProps) {

  const { children, defaultOpen } = props;
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);

  useEffect(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen])

  return (
    <AccordionContext.Provider value={{ openAccordions, setOpenAccordions }}>
      <div className="guwmi-accordion-container">
        {children}
      </div>
    </AccordionContext.Provider>
  )
}