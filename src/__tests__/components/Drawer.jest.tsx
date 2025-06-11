// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Drawer from '@components/Drawer/Drawer';

describe('Drawer', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  })

  test('drawer does not render by default', () => {
    
    const handleClose = jest.fn(); 
    render(
      <Drawer open={false} onClose={handleClose} data-testid="guwmi-drawer">
        <p>Drawer content</p>
      </Drawer>
    )

    const drawer = screen.queryByTestId('guwmi-drawer');
    expect(drawer).not.toBeInTheDocument();
  });

  test('drawer renders if open prop is true', () => {
    
    const handleClose = jest.fn(); 
    render(
      <Drawer open={true} onClose={handleClose} data-testid="guwmi-drawer">
        <p>Drawer content</p>
      </Drawer>
    )

    const drawer = screen.queryByTestId('guwmi-drawer');
    expect(drawer).toBeInTheDocument();
  });

  test('renders with override class', () => {
    
    const handleClose = jest.fn(); 
    render(
      <Drawer open={true} onClose={handleClose} className="override-class" data-testid="guwmi-drawer">
        <p>Drawer content</p>
      </Drawer>
    )

    const drawer = screen.queryByTestId('guwmi-drawer').querySelector('.guwmi-drawer');
    expect(drawer).toBeInTheDocument();
    expect(drawer).toHaveClass('override-class');
  });

  test('calls onClose handler when appropriate', async () => {
    
    const handleClose = jest.fn(); 
    render(
      <Drawer open={true} onClose={handleClose} data-testid="guwmi-drawer">
        <p>Drawer content</p>
      </Drawer>
    )

    const drawer = screen.queryByTestId('guwmi-drawer');
    const closeButton = drawer.querySelector('button');
    await user.click(closeButton);
    await user.click(drawer);
    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalledTimes(3);
  });
});