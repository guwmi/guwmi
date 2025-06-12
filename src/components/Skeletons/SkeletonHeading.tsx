// component type
interface ComponentProps {
  heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export default function SkeletonHeading(props: ComponentProps) {

  const { heading, ...rest } = props;

  switch(heading) {
    case 'h1':
      return ( <h1 className="guwmi-skeleton-heading guwmi-skeleton" {...rest}></h1> );
    case 'h2':
      return ( <h2 className="guwmi-skeleton-heading guwmi-skeleton" {...rest}></h2> );
    case 'h3':
      return ( <h3 className="guwmi-skeleton-heading guwmi-skeleton" {...rest}></h3> );
    case 'h4':
      return ( <h4 className="guwmi-skeleton-heading guwmi-skeleton" {...rest}></h4> );
    case 'h5':
      return ( <h5 className="guwmi-skeleton-heading guwmi-skeleton" {...rest}></h5> );
    case 'h6':
      return ( <h6 className="guwmi-skeleton-heading guwmi-skeleton" {...rest}></h6> );
  }
}