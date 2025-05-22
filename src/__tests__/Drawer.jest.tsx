// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import component to test
import Drawer from '@components/Drawer/Drawer';

describe('Drawer', () => {

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

  test('calls onClose handler when appropriate', () => {
    
    const handleClose = jest.fn(); 
    render(
      <Drawer open={true} onClose={handleClose} data-testid="guwmi-drawer">
        <p>Drawer content</p>
      </Drawer>
    )

    const drawer = screen.queryByTestId('guwmi-drawer');
    const closeButton = drawer.querySelector('button');
    fireEvent.click(closeButton);
    fireEvent.click(drawer);
    fireEvent.keyDown(drawer, {
      key: "Escape",
      code: "Escape",
      keyCode: 27,
      charCode: 27
    });
    expect(handleClose).toHaveBeenCalledTimes(3);
  });
});