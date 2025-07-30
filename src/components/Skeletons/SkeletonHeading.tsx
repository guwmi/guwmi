// component type
export interface SkeletonHeadingProps {
  className?: string;
  heading:
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6';
}

/**
 * Skeleton Heading component ****************************************************************
 * 
 * @param className - (optional) string value for the className of the component
 * @param heading - value of 'h1', 'h2', 'h3', 'h4', 'h5', or 'h6' determines the heading tag rendered
 * 
 */

export default function SkeletonHeading(props: SkeletonHeadingProps) {

  const { heading, className, ...rest } = props;
  const classes = `guwmi-skeleton-heading guwmi-skeleton${className ? ' ' + className : ''}`;

  switch(heading) {
    case 'h1':
      return ( <h1 className={classes} {...rest}>Skeleton...</h1> );
    case 'h2':
      return ( <h2 className={classes} {...rest}>Skeleton..</h2> );
    case 'h3':
      return ( <h3 className={classes} {...rest}>Skeleton..</h3> );
    case 'h4':
      return ( <h4 className={classes} {...rest}>Skeleton..</h4> );
    case 'h5':
      return ( <h5 className={classes} {...rest}>Skeleton..</h5> );
    case 'h6':
      return ( <h6 className={classes} {...rest}>Skeleton..</h6> );
  }
}