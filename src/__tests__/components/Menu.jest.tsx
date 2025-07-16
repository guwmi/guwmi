// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Menu from '../../components/Menu/Menu';
import MenuDropdown from '../../components/Menu/MenuDropdown';
import MenuItem from '../../components/Menu/MenuItem';
import MenuTrigger from '../../components/Menu/MenuTrigger';
import IconButton from '../../components/IconButton/IconButton';
import Icon from '../../components/Icon/Icon';

describe('Menu Component', () => {

  const handleClick = jest.fn();
  const menuStructure = 
    <Menu
      ariaLabel="test menu"
      className="override-class"
      position="bottom-right"
      width={500}
      data-testid="guwmi-menu-container"
    >
      <MenuTrigger className="override-class" data-testid="guwmi-menu-trigger">
        <IconButton ariaLabel="open menu">
          <Icon name="menu" size={20} />
        </IconButton>
      </MenuTrigger>
      <MenuDropdown className="override-class" data-testid="guwmi-menu-dropdown">
        <MenuItem className="override-class" data-testid="guwmi-menu-item"><Icon name="menu" /> Item One</MenuItem>
        <MenuItem href="https://www.google.com">Link Item</MenuItem>
        <MenuItem onClick={handleClick}>Button Item</MenuItem>
        <MenuItem>Item Four</MenuItem>
      </MenuDropdown>
    </Menu>;
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  test('does not render by default', () => {

    render( menuStructure );

    const dropdown = screen.queryByTestId('guwmi-menu-dropdown');
    expect(dropdown).not.toBeInTheDocument();
  });

  test('renders when menu trigger is clicked', async () => {

    render( menuStructure );

    const menuTrigger = screen.getByRole('button');
    await user.click(menuTrigger);
    const dropdown = screen.getByTestId('guwmi-menu-dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  test('renders with the width property applied', async () => {

    const { rerender } = render (
      <Menu ariaLabel="test menu" width={500}>
        <MenuTrigger>
          <IconButton ariaLabel="open menu">
            <Icon name="menu" size={20} />
          </IconButton>
        </MenuTrigger>
        <MenuDropdown data-testid="guwmi-menu-dropdown">
          <MenuItem>Item One</MenuItem>
        </MenuDropdown>
      </Menu>
    )

    let menuTrigger = screen.getByRole('button', {name: 'open menu'});
    await user.click(menuTrigger);
    let dropdown = screen.getByTestId('guwmi-menu-dropdown');
    expect(dropdown).toHaveStyle('width: 500px');

    rerender (
      <Menu ariaLabel="test menu">
        <MenuTrigger>
          <IconButton ariaLabel="open menu">
            <Icon name="menu" size={20} />
          </IconButton>
        </MenuTrigger>
        <MenuDropdown data-testid="guwmi-menu-dropdown">
          <MenuItem>Item One</MenuItem>
        </MenuDropdown>
      </Menu>
    )

    dropdown = screen.getByTestId('guwmi-menu-dropdown');
    expect(dropdown).not.toHaveStyle;
  });

  test('renders with position override', async () => {

    render( menuStructure );

    const menuTrigger = screen.getByRole('button');
    await user.click(menuTrigger);
    const menu = screen.getByTestId('guwmi-menu-container');
    expect(menu).toHaveClass('bottom-right');
  });

  test('items function as intended', async () => {

    render( menuStructure );

    const menuTrigger = screen.getByRole('button');
    await user.click(menuTrigger);
    const link = screen.getByText('Link Item');
    expect(link).toHaveAttribute('href', 'https://www.google.com');
    const button = screen.getByText('Button Item');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders with override classes', async () => {

    render( menuStructure );

    const menuTrigger = screen.getByRole('button');
    await user.click(menuTrigger);
    const container = screen.getByTestId('guwmi-menu-container');
    expect(container).toHaveClass('override-class');
    const trigger = screen.getByTestId('guwmi-menu-trigger');
    expect(trigger).toHaveClass('override-class');
    const dropdown = screen.getByTestId('guwmi-menu-dropdown');
    expect(dropdown).toHaveClass('override-class');
    const item = screen.getByTestId('guwmi-menu-item');
    expect(item).toHaveClass('override-class');
  });
});