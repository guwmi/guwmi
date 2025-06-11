// import library functionality
import { render, renderHook, screen } from '@testing-library/react';

// import hook
import useAnimation from '../../hooks/useAnimation';

describe('useAnimation Hook', () => {

  test('adds and removes class and returns visibility as expected', async () => {

    render(
      <>
        <div id="ref" data-testid="ref">The ref</div>
      </>
    );
    const mockRef = { current: document.getElementById('ref') };
    const { result, rerender } = renderHook((props) => useAnimation(props.open, props.class, props.ref), {initialProps: {open: false, class: 'test-class', ref: mockRef}});
    const div = screen.getByTestId('ref');
    expect(div).not.toHaveClass('test-class');
    expect(result.current.isVisible).toBe(false);
    rerender({open: true, class: 'test-class', ref: mockRef});
    await new Promise(resolve => setTimeout(resolve, 50));
    expect(div).toHaveClass('test-class');
    expect(result.current.isVisible).toBe(true);
  })
})