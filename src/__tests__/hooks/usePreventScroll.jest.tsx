// import library functionality
import { render, renderHook } from '@testing-library/react';

// import hook
import usePreventScroll from '../../hooks/usePreventScroll';

// import component for render
import Button from '../../components/Button/Button';

describe('usePreventScroll Hook', () => {

  test('adds the correct styles to the body element', () => {
    const { result, rerender } = renderHook((props) => usePreventScroll(props.open, props.enabled), {initialProps: {open: false, enabled: true}});
    render(
      <Button>Test button</Button>
    )
    expect(document.body).not.toHaveStyle('height: 100%');
    expect(document.body).not.toHaveStyle('overflow: hidden');
    rerender({open: true, enabled: true});
    expect(document.body).toHaveStyle('height: 100%');
    expect(document.body).toHaveStyle('overflow: hidden');
  })
})