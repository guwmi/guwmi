// import library functionality
import { render, renderHook, fireEvent, screen } from '@testing-library/react';

// import hook
import useCloseOutClick from '@hooks/useCloseOutClick';

describe('useCloseOutClick Hook', () => {

  test('calls onClose when clicked outside ref', () => {

    render(
      <>
        <div id="not-ref" data-testid="not-ref">Not the ref</div>
        <div id="ref">The ref</div>
      </>
    );
    const mockRef = { current: document.getElementById('ref') };
    const mockClose = jest.fn();
    const { result, rerender } = renderHook((props) => useCloseOutClick(props.open, props.onClose, props.ref), {initialProps: {open: true, onClose: mockClose, ref: mockRef}});
    const notRef = screen.getByTestId('not-ref');
    fireEvent.click(notRef);
    expect(mockClose).toHaveBeenCalledTimes(1);
    rerender({open: false, onClose: mockClose, ref: mockRef});
    fireEvent.click(notRef);
    expect(mockClose).toHaveBeenCalledTimes(1);
  })
})