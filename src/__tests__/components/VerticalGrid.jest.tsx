// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import VerticalGrid from '../../components/VerticalGrid/VerticalGrid';

describe('VerticalGrid Component', () => {

  test('renders with correct classes', () => {
    
    const { rerender } = render(<VerticalGrid data-testid="guwmi-vertical-grid" className="override-class"></VerticalGrid>)

    const verticalGrid = screen.getByTestId('guwmi-vertical-grid');
    expect(verticalGrid).toHaveClass('space-1');
    expect(verticalGrid).toHaveClass('pad-0');
    expect(verticalGrid).toHaveClass('override-class');
    rerender(<VerticalGrid spacing={1} padding={1} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(verticalGrid).toHaveClass('space-1');
    expect(verticalGrid).toHaveClass('pad-1');
    rerender(<VerticalGrid spacing={2} padding={2} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(verticalGrid).toHaveClass('space-2');
    expect(verticalGrid).toHaveClass('pad-2');
    rerender(<VerticalGrid spacing={3} padding={3} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(verticalGrid).toHaveClass('space-3');
    expect(verticalGrid).toHaveClass('pad-3');
    rerender(<VerticalGrid spacing={4} padding={4} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(verticalGrid).toHaveClass('space-4');
    expect(verticalGrid).toHaveClass('pad-4');
    rerender(<VerticalGrid spacing={5} padding={5} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(verticalGrid).toHaveClass('space-5');
    expect(verticalGrid).toHaveClass('pad-5');
    rerender(<VerticalGrid spacing={6} padding={6} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(verticalGrid).toHaveClass('space-6');
    expect(verticalGrid).toHaveClass('pad-6');
    rerender(<VerticalGrid spacing={0} padding={0} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(verticalGrid).toHaveClass('space-0');
    expect(verticalGrid).toHaveClass('pad-0');
  });
})