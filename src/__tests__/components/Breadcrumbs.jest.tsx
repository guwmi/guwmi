// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

describe('Breadcrumbs Component', () => {

  const handleClick = jest.fn();
  const links = [
    { text: 'Link page', href: 'https://www.google.com' },
    { text: 'Button page', onClick: handleClick },
    { text: 'Current page' }
  ]
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    jest.clearAllMocks();
  })

  test('renders correctly with defaults', () => {

    render (
      <Breadcrumbs
        ariaLabel="Page breadcrumbs"
        links={links}
        data-testid="guwmi-breadcrumbs"
      />
    )

    const linksList = screen.getByTestId('guwmi-breadcrumbs').querySelector('ol').querySelectorAll('li');
    const link = screen.getByText('Link page');
    expect(linksList).toHaveLength(3);
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://www.google.com');
  });

  test('renders with background and override class', () => {

    render (
      <Breadcrumbs
        ariaLabel="Page breadcrumbs"
        links={links}
        data-testid="guwmi-breadcrumbs"
        className="override-class"
        hasBackground
        skeleton
      />
    )

    const breadcrumbs = screen.getByTestId('guwmi-breadcrumbs');
    expect(breadcrumbs).toHaveClass('has-background');
    expect(breadcrumbs).toHaveClass('override-class');
    expect(breadcrumbs.querySelector('li')).toHaveClass('alt')
  });

  test('correctly handles button clicks', async () => {

    render (
      <Breadcrumbs
        ariaLabel="Page breadcrumbs"
        links={links}
        data-testid="guwmi-breadcrumbs"
      />
    )

    const button = screen.getByText('Button page');
    await user.click(button);
    expect(handleClick).toHaveBeenCalled();
  });

  test('correctly handles disabled links', async () => {

    render (
      <Breadcrumbs
        ariaLabel="Page breadcrumbs"
        links={[{ text: 'Button page', onClick: handleClick, disabled: true }]}
        data-testid="guwmi-breadcrumbs"
      />
    )

    const button = screen.getByText('Button page');
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('correctly renders in skeleton state', () => {

    render (
      <Breadcrumbs
        ariaLabel="Page breadcrumbs"
        links={[
          { text: 'Button page', onClick: handleClick },
          { text: 'Link page', href: "https://www.google.com" },
          { text: 'Last' }
        ]}
        data-testid="guwmi-breadcrumbs"
        skeleton
      />
    )

    const li = screen.getByTestId('guwmi-breadcrumbs').querySelector('li');
    const button = screen.getByText('Button page');
    const link = screen.getByText('Button page');
    expect(li).toHaveClass('guwmi-skeleton');
    expect(button).toHaveAttribute('tabIndex', '-1');
    expect(link).toHaveAttribute('tabIndex', '-1');
  });
})