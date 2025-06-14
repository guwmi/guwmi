// component type
export interface SkeletonParagraphProps {
  numLines?: number;
}

/**
 * Skeleton Paragraph component ************************************************************
 * 
 * @param numLines - (optional) number value for the number of mock paragraph lines to display - defaults to 5
 * 
 */

export default function SkeletonParagraph(props: SkeletonParagraphProps) {

  const { numLines = 5, ...rest } = props;

  return (
    <p className="guwmi-skeleton-paragraph" {...rest}>
      {Array.from({ length: numLines }, (_, index) => index).map((v, i) => (
        <span key={`guwmi-skeleton-p-${i}`} className="guwmi-skeleton">Skeleton...</span>
      ))}
    </p>
  )
}