// import library functionality
import { useContext, PropsWithChildren } from 'react';

// import context
import TabsContext from './TabsContext';

// component type
interface ComponentProps extends PropsWithChildren {
  index?: number;
  className?: string;
}

export default function TabPanel(props: ComponentProps) {

  const {
    className,
    children,
    index,
    ...rest
  } = props;
  const { id, selectedTab } = useContext(TabsContext);
  const classes = `guwmi-tab-panel${selectedTab === index ? ' active' : ''}${className ? ' ' + className : ''}`;

  return (
    <section
      className={classes}
      role="tabpanel"
      hidden={selectedTab !== index}
      aria-labelledby={`tabs-${id}-tab-${index}`}
      id={`tabs-${id}-tabpanel-${index}`}
      {...rest}
    >
      {children}
    </section>
  )
}