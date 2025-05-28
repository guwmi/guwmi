// import library functionality
import { renderHook, fireEvent } from '@testing-library/react';

// import hook
import useWindowWidth from '@hooks/useWindowWidth';

describe('useWindwoWidth Hook', () => {

  test('returns the correct window widths', () => {
    const { result } = renderHook(() => useWindowWidth());
    window.innerWidth = 1024;
    expect(result.current).toBe(1024);
    window.innerWidth = 500;
    fireEvent(window, new Event('resize'));
    expect(result.current).toBe(500);
  })
})