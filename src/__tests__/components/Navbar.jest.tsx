// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import components
import Navbar from '../../components/Navbar/Navbar';
import NavbarGroup from '../../components/Navbar/NavbarGroup';
import NavbarItem from '../../components/Navbar/NavbarItem';

describe('Navbar Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    jest.clearAllMocks();
  })

  test('renders with correct elements', async () => {

    render (
      <Navbar ariaLabel="Test navbar" data-testid="guwmi-navbar">
        <NavbarItem>Item one</NavbarItem>
        <NavbarItem>Item two</NavbarItem>
        <NavbarGroup label="Item three" data-testid="guwmi-sub-nav">
          <NavbarItem>Sub-item one</NavbarItem>
          <NavbarItem>Sub-item two</NavbarItem>
          <NavbarItem>Sub-item three</NavbarItem>
        </NavbarGroup>
        <NavbarItem>Item four</NavbarItem>
      </Navbar>
    )

    const nav = screen.getByTestId('guwmi-navbar');
    const topLevel = nav.querySelector('ul');
    const topLevelItems = topLevel.querySelectorAll(':scope > li');
    const subLevel = screen.getByTestId('guwmi-sub-nav');
    const subNavbarItem = subLevel.querySelector('button');
    expect(subLevel.querySelector('ul')).toHaveAttribute('tabIndex', '-1');
    await user.click(subNavbarItem);
    const subItems = subLevel.querySelectorAll('li');
    expect(nav).toBeInTheDocument();
    expect(topLevel).toBeInTheDocument();
    expect(topLevelItems).toHaveLength(4);
    expect(subLevel).toBeInTheDocument();
    expect(subItems).toHaveLength(3);
    expect(subLevel.querySelector('ul')).toBeInTheDocument();
    expect(subLevel.querySelector('ul')).not.toHaveAttribute('tabIndex');
  });

  test('renders with override classes', () => {

    render (
      <Navbar ariaLabel="Test navbar" data-testid="guwmi-navbar" className="override-class">
        <NavbarGroup label="Item three" data-testid="guwmi-sub-nav" className="override-class">
          <NavbarItem>Sub-item one</NavbarItem>
        </NavbarGroup>
        <NavbarItem className="override-class" data-testid="guwmi-navbar-item">Item one</NavbarItem>
      </Navbar>
    )

    const nav = screen.getByTestId('guwmi-navbar');
    expect(nav).toHaveClass('override-class');
    const subNav = screen.getByTestId('guwmi-sub-nav');
    expect(subNav).toHaveClass('override-class');
    const navItem = screen.getByTestId('guwmi-navbar-item');
    expect(navItem).toHaveClass('override-class');
  });

  test('renders with skeleton classes', () => {

    render (
      <Navbar ariaLabel="Test navbar" data-testid="guwmi-navbar" skeleton>
        <NavbarItem>Item one</NavbarItem>
      </Navbar>
    )

    const nav = screen.getByTestId('guwmi-navbar');
    const skeletonItems = nav.querySelectorAll('.guwmi-navbar-button.guwmi-skeleton');
    expect(skeletonItems).toHaveLength(5);
  });

  test('renders with default open nav group', () => {

    render (
      <Navbar ariaLabel="Test navbar" data-testid="guwmi-navbar">
        <NavbarItem>Item one</NavbarItem>
        <NavbarGroup defaultOpen={true} label="Item three" data-testid="guwmi-sub-nav">
          <NavbarItem>Sub-item one</NavbarItem>
          <NavbarItem>Sub-item two</NavbarItem>
          <NavbarItem>Sub-item three</NavbarItem>
        </NavbarGroup>
      </Navbar>
    )

    const subLevel = screen.getByTestId('guwmi-sub-nav');
    const subItems = subLevel.querySelectorAll('li');
    expect(subLevel).toHaveClass('open');
    expect(subItems).toHaveLength(3);
  });

  test('calls onClick handler when clicked', async() => {

    const handleClick = jest.fn();
    render(<NavbarItem onClick={handleClick} data-testid="nav-item">Click Me</NavbarItem>);

    const navItem = screen.getByTestId('nav-item').querySelector('button');
    await user.click(navItem);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders item as link with correct href', () => {

    render(<NavbarItem href="https://www.google.com">Link</NavbarItem>);

    const link = screen.getByText('Link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://www.google.com');
  });

  test('renders with anchor elements', () => {

    render(
      <>
        <NavbarItem data-testid="guwmi-nav-item"><a href="https://www.google.com">Link</a></NavbarItem>
        <NavbarItem disabled><a href="https://www.google.com">Disabled link</a></NavbarItem>
      </>
    );

    const div = screen.getByTestId('guwmi-nav-item');
    const link = screen.getByText('Link');
    const disabledLink = screen.getByText('Disabled link');
    expect(div.tagName).not.toBe('A');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://www.google.com');
    expect(disabledLink).toHaveAttribute('tabIndex', '-1');
    expect(disabledLink).toHaveAttribute('href', '');
  });

  test('does not call onClick handler when disabled', async () => {

    const handleClick = jest.fn();
    render(<NavbarItem onClick={handleClick} data-testid="nav-item" disabled>Click Me</NavbarItem>);

    const navItem = screen.getByTestId('nav-item').querySelector('button');
    await user.click(navItem);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('is disabled when disabled prop is true', () => {

    render(<NavbarItem data-testid="nav-item" onClick={() => console.log('clicked')} disabled>Click Me</NavbarItem>);

    const navItem = screen.getByTestId('nav-item').querySelector('button');
    expect(navItem).toBeDisabled();
  });

  test('renders with target attribute', () => {

    render(<NavbarItem target="_blank" href="https://www.google.com">Target Link</NavbarItem>);

    const link = screen.getByText('Target Link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('applies active class', () => {

    render(<NavbarItem active={true} data-testid="nav-item">Styled NavbarItem</NavbarItem>);

    const navItem = screen.getByTestId('nav-item');
    expect(navItem).toHaveClass('active');
  });
})