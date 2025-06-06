// import library functionality
import { render, renderHook, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import hook
import useClickOutside from '@hooks/useClickOutside';

describe('useClickOutside Hook', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  test('calls onClose when clicked outside ref', async () => {

    render(
      <>
        <div id="not-ref" data-testid="not-ref">Not the ref</div>
        <div id="ref">The ref</div>
      </>
    );
    const mockRef = { current: document.getElementById('ref') };
    const mockClose = jest.fn();
    const { rerender } = renderHook((props) => useClickOutside(props.open, props.onClose, props.ref), {initialProps: {open: true, onClose: mockClose, ref: mockRef}});
    const notRef = screen.getByTestId('not-ref');
    await user.click(notRef);
    expect(mockClose).toHaveBeenCalledTimes(1);
    rerender({open: false, onClose: mockClose, ref: mockRef});
    await user.click(notRef);
    expect(mockClose).toHaveBeenCalledTimes(1);
  })
})