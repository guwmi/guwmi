// import library functionality
import { useState, PropsWithChildren, useEffect } from 'react';

// import context
import AccordionContext from './AccordionContext';

// component type
interface ComponentProps extends PropsWithChildren {
  defaultOpen?: string;
  className?: string;
}

export default function Accordion(props: ComponentProps) {

  const {
    children,
    defaultOpen,
    className,
    ...rest
  } = props;
  const [openAccordions, setOpenAccordions] = useState<string[]>([]);
  const classes = `guwmi-accordion-container${className ? ' ' + className : ''}`;

  useEffect(() => {
    if (defaultOpen) {
      setOpenAccordions([...openAccordions, defaultOpen]);
    }
  }, [defaultOpen])

  return (
    <AccordionContext.Provider value={{ openAccordions, setOpenAccordions }}>
      <div className={classes} {...rest}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}