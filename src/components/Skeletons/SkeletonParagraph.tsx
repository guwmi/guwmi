// component type
export interface SkeletonParagraphProps {
  className?: string;
  numLines?: number;
}

/**
 * Skeleton Paragraph component ************************************************************
 * 
 * @param className - (optional) string value for the className of the component
 * @param numLines - (optional) number value for the number of mock paragraph lines to display - defaults to 5
 * 
 */

export default function SkeletonParagraph(props: SkeletonParagraphProps) {

  const { numLines = 5, className, ...rest } = props;
  const classes = `guwmi-skeleton-paragraph${className ? ' ' + className : ''}`;

  return (
    <p className={classes} {...rest}>
      {Array.from({ length: numLines }, (_, index) => index).map((v, i) => (
        <span key={`guwmi-skeleton-p-${i}`} className="guwmi-skeleton">Skeleton...</span>
      ))}
    </p>
  )
}