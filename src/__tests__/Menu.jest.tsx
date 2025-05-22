// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import component to test
import Menu from '@components/Menu/Menu';
import MenuDropdown from '@components/Menu/MenuDropdown';
import MenuItem from '@components/Menu/MenuItem';
import MenuTrigger from '@components/Menu/MenuTrigger';
import Button from '@components/Button/Button';
import IconButton from '@components/IconButton/IconButton';
import Icon from '@components/Icon/Icon';

describe('Menu', () => {

  const handleClick = jest.fn();
  const menuStructure = 
    <Menu ariaLabel="test menu">
      <MenuTrigger>
        <IconButton ariaLabel="open menu">
          <Icon name="menu" size={20} />
        </IconButton>
      </MenuTrigger>
      <MenuDropdown data-testid="guwmi-menu-dropdown">
        <MenuItem><Icon name="menu" /> Item One</MenuItem>
        <MenuItem href="https://www.google.com">Link Item</MenuItem>
        <MenuItem onClick={handleClick}>Button Item</MenuItem>
        <MenuItem>Item Four</MenuItem>
      </MenuDropdown>
    </Menu>;

  test('menu does not render by default', () => {

    render( menuStructure );

    const dropdown = screen.queryByTestId('guwmi-menu-dropdown');
    expect(dropdown).not.toBeInTheDocument();
  });

  test('menu renders when menu trigger is clicked', () => {

    render( menuStructure );

    const menuTrigger = screen.getByRole('button');
    fireEvent.click(menuTrigger);
    setTimeout(() => { // Need to convert to watch for tansitonend, but no animation is longer than 0.6s so this will work for now
      const dropdown = screen.getByTestId('guwmi-menu-dropdown');
      expect(dropdown).toBeInTheDocument();
    }, 600);
  });

  test('menu items function as intended', () => {

    render( menuStructure );

    const menuTrigger = screen.getByRole('button');
    fireEvent.click(menuTrigger);
    setTimeout(() => { // Need to convert to watch for tansitonend, but no animation is longer than 0.6s so this will work for now
      const link = screen.getByText('Link Item');
      expect(link).toHaveAttribute('href', 'https://www.google.com');
      const button = screen.getByText('Button Item');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    }, 600);
  });
});