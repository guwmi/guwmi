// import library functionality
import { render, renderHook, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import hook
import useTabThrough from '../../hooks/useTabThrough';

describe('useTabThrough Hook', () => {
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('correctly traps focus while tabbing', async () => {

    render(
      <ul id="ref" data-testid="container" tabIndex={1}>
        <li><a href="https://www.google.com" data-testid="link">Test tink</a></li>
        <li><button onClick={() => console.log('button click')} data-testid="button">Test button</button></li>
        <li><input type="text" data-testid="input" /></li>
      </ul>
    )
    const mockRef = { current: document.getElementById('ref') };
    const mockClose = jest.fn();
    const container = screen.getByTestId('container');
    const link = screen.getByTestId('link');
    const button = screen.getByTestId('button');
    const input = screen.getByTestId('input')
    const { rerender } = renderHook((props) => useTabThrough(props.open, props.onClose, props.ref), {initialProps: {open: false, onClose: mockClose, ref: mockRef}});
    rerender({open: true, onClose: mockClose, ref: mockRef});
    await new Promise(resolve => setTimeout(resolve, 50));
    expect(container).toHaveFocus();
    await user.tab();
    expect(link).toHaveFocus();
    await user.tab();
    expect(button).toHaveFocus();
    await user.tab();
    expect(input).toHaveFocus();
    await user.tab();
    expect(mockClose).toHaveBeenCalledTimes(1);
    rerender({open: false, onClose: mockClose, ref: mockRef});
    rerender({open: true, onClose: mockClose, ref: mockRef});
    await user.tab({ shift: true });
    expect(mockClose).toHaveBeenCalledTimes(2);
  });

  test('calls onClose with escape keydown', async () => {

    render(
      <ul id="ref" data-testid="container" tabIndex={1}>
        <li><a href="https://www.google.com" data-testid="link">Test tink</a></li>
        <li><button onClick={() => console.log('button click')} data-testid="button">Test button</button></li>
        <li><input type="text" data-testid="input" /></li>
      </ul>
    )
    const mockRef = { current: document.getElementById('ref') };
    const mockClose = jest.fn();
    const { rerender } = renderHook((props) => useTabThrough(props.open, props.onClose, props.ref), {initialProps: {open: false, onClose: mockClose, ref: mockRef}});
    rerender({open: true, onClose: mockClose, ref: mockRef});
    await new Promise(resolve => setTimeout(resolve, 50));
    await user.keyboard('{Escape}');
    expect(mockClose).toHaveBeenCalledTimes(1);
  })
})