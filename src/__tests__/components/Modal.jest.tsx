// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import component to test
import Modal from '@components/Modal/Modal';

describe('Modal', () => {

  test('modal does not render by default', () => {
    
    const handleClose = jest.fn(); 
    render(
      <Modal open={false} onClose={handleClose} data-testid="guwmi-modal">
        <p>Modal content</p>
      </Modal>
    )

    const modal = screen.queryByTestId('guwmi-modal');
    expect(modal).not.toBeInTheDocument();
  });

  test('modal renders if open prop is true', () => {
    
    const handleClose = jest.fn(); 
    render(
      <Modal open={true} onClose={handleClose} data-testid="guwmi-modal">
        <p>Modal content</p>
      </Modal>
    )

    const modal = screen.queryByTestId('guwmi-modal');
    expect(modal).toBeInTheDocument();
  });

  test('calls onClose handler when appropriate', () => {
    
    const handleClose = jest.fn(); 
    render(
      <Modal open={true} onClose={handleClose} data-testid="guwmi-modal">
        <p>Modal content</p>
      </Modal>
    )

    setTimeout(() => { // Need to convert to watch for tansitonend, but no animation is longer than 0.6s so this will work for now
      const modal = screen.queryByTestId('guwmi-modal');
      const closeButton = modal.querySelector('button');
      fireEvent.click(closeButton);
      fireEvent.click(modal);
      fireEvent.keyDown(modal, {
        key: "Escape",
        code: "Escape",
        keyCode: 27,
        charCode: 27
      });
      expect(handleClose).toHaveBeenCalledTimes(3);
    }, 600)
  });
});