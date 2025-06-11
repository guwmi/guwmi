// import components
import Icon from '../../components/Icon/Icon';

// component type
interface ComponentProps {
  ariaLabel: string;
  links: {
    text: string;
    href?: string;
    onClick?: ()=> void;
    disabled?: boolean
  }[];
  hasBackground?: boolean;
  className?: string;
  loading?: boolean;
}

export default function Breadcrumbs(props: ComponentProps) {

  const {
    ariaLabel,
    links,
    hasBackground = false,
    className,
    loading,
    ...rest
  } = props;
  const classes = `guwmi-breadcrumbs${hasBackground ? ' has-background' : ''}${className ? ' ' + className : ''}`;

  return (
    <nav className={classes} aria-label={ariaLabel} {...rest}>
      <ol>
        {links.map((link, index) => (
          <li 
            key={`${link.text.toLowerCase().replaceAll(' ', '')}-${index}`} 
            className={loading && hasBackground ? 'guwmi-skeleton alt' : loading  ? 'guwmi-skeleton' : null}
          >
            {(index + 1) !== links.length ? (
              <>
                {link.href && !link.disabled ? (
                  <a href={link.href}>
                    {link.text}
                  </a>
                ) : (
                  <button onClick={link.onClick} disabled={link.disabled}>
                    {link.text}
                  </button>
                )}
                <Icon name="chevron-right" aria-hidden="true" size={16} />
              </>
            ) : (
              <a aria-current="location" className="guwmi-breadcrumb-current">
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}