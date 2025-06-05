// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import components
import Tooltip from '../../components/Tooltip/Tooltip';

describe('Tootip Component', () => {

  test('renders with defaults', () => {

    render (
      <Tooltip text="Tooltip text" data-testid="guwmi-tooltip">
        <button>Test button</button>
      </Tooltip>
    )

    const tipContainer = screen.getByTestId('guwmi-tooltip');
    const tip = screen.getByText('Tooltip text');
    expect(tip).toBeInTheDocument();
    expect(tipContainer).toHaveClass('bottom');
  });

  test('renders with override class', () => {

    render (
      <Tooltip text="Tooltip text" className="test-override" data-testid="guwmi-tooltip">
        <button>Test button</button>
      </Tooltip>
    )

    const tipContainer = screen.getByTestId('guwmi-tooltip');
    expect(tipContainer).toHaveClass('test-override');
  });

  test('renders with correct alignment classes', () => {

    const { rerender } = render (
      <Tooltip text="Tooltip text" align="bottom" data-testid="guwmi-tooltip">
        <button>Test button</button>
      </Tooltip>
    )

    const tipContainer = screen.getByTestId('guwmi-tooltip');
    expect(tipContainer).toHaveClass('bottom');
    rerender (
      <Tooltip text="Tooltip text" align="top" data-testid="guwmi-tooltip">
        <button>Test button</button>
      </Tooltip>
    )
    expect(tipContainer).toHaveClass('top');
    rerender (
      <Tooltip text="Tooltip text" align="right" data-testid="guwmi-tooltip">
        <button>Test button</button>
      </Tooltip>
    )
    expect(tipContainer).toHaveClass('right');
    rerender (
      <Tooltip text="Tooltip text" align="left" data-testid="guwmi-tooltip">
        <button>Test button</button>
      </Tooltip>
    )
    expect(tipContainer).toHaveClass('left');
  });
})