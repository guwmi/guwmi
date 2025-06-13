// component type
interface ComponentProps {
  numLines?: number;
}

export default function SkeletonParagraph(props: ComponentProps) {

  const { numLines = 5, ...rest } = props;

  return (
    <p className="guwmi-skeleton-paragraph" {...rest}>
      {Array.from({ length: numLines }, (_, index) => index).map((v, i) => (
        <span key={`guwmi-skeleton-p-${i}`} className="guwmi-skeleton">Skeleton...</span>
      ))}
    </p>
  )
}