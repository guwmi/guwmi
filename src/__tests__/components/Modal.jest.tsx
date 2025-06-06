// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Modal from '@components/Modal/Modal';

describe('Modal', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

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

  test('calls onClose handler when appropriate', async () => {
    
    const handleClose = jest.fn(); 
    render(
      <Modal open={true} onClose={handleClose} data-testid="guwmi-modal">
        <p>Modal content</p>
      </Modal>
    )

    const modal = screen.queryByTestId('guwmi-modal');
    const closeButton = modal.querySelector('button');
    await user.click(closeButton);
    await user.click(modal);
    await user.keyboard('{Escape}');
    expect(handleClose).toHaveBeenCalledTimes(3);
  });
});