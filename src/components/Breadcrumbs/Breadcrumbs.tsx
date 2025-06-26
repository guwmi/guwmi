// import components
import Icon from '../../components/Icon/Icon';

// component type
interface BreadcrumbsProps {
  ariaLabel: string;
  links: {
    text: string;
    href?: string;
    onClick?: ()=> void;
    disabled?: boolean
  }[];
  hasBackground?: boolean;
  className?: string;
  skeleton?: boolean;
}

/**
 * Breadcrumbs component ********************************************************************
 * 
 * * If a link includes an href and are not disabled, it will render as an anchor element,
 *   otherwise it will render as a button element
 * 
 * * The last link will always render as the 'current-location' <a> element without an href of onClick
 * 
 * @param ariaLabel - string value for the aria-label property of the breadcrumbs nav element
 * @param links - array of link objects:
 *  - text - string value for the text of a link
 *  - href - (optional) string value for the href property of a link
 *  - onClick - (optional) function to be use onClick in place of an href (helpful for router pushing in SPAs)
 *  - disabled - (optionsl) boolean value that determines the disabled state of a link
 * @param hasBackground - (optional) boolean value that determines if the breadcrumbs are wrapped in a container with a background
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function Breadcrumbs(props: BreadcrumbsProps) {

  const {
    ariaLabel,
    links,
    hasBackground,
    className,
    skeleton,
    ...rest
  } = props;
  const classes = `guwmi-breadcrumbs${hasBackground ? ' has-background' : ''}${className ? ' ' + className : ''}`;

  return (
    <nav className={classes} aria-label={ariaLabel} {...rest}>
      <ol>
        {links.map((link, index) => (
          <li 
            key={`${link.text.toLowerCase().replaceAll(' ', '')}-${index}`} 
            className={skeleton && hasBackground ? 'guwmi-skeleton alt' : skeleton  ? 'guwmi-skeleton' : null}
          >
            {(index + 1) !== links.length ? (
              <>
                {link.href && !link.disabled ? (
                  <a href={link.href} tabIndex={skeleton ? -1: 0}>
                    {link.text}
                  </a>
                ) : (
                  <button onClick={link.onClick} disabled={link.disabled} tabIndex={skeleton ? -1: 0}>
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