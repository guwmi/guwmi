// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import VerticalGrid from '@components/VerticalGrid/VerticalGrid';

describe('VerticalGrid', () => {

  test('renders vertical grid with correct spacing classes', () => {
    
    const { rerender } = render(<VerticalGrid data-testid="guwmi-vertical-grid"></VerticalGrid>)

    const cardContainer = screen.getByTestId('guwmi-vertical-grid');
    expect(cardContainer).toHaveClass('space-2');
    rerender(<VerticalGrid spacing={1} padding={1} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('space-1');
    expect(cardContainer).toHaveClass('pad-1');
    rerender(<VerticalGrid spacing={2} padding={2} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('space-2');
    expect(cardContainer).toHaveClass('pad-2');
    rerender(<VerticalGrid spacing={3} padding={3} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('space-3');
    expect(cardContainer).toHaveClass('pad-3');
    rerender(<VerticalGrid spacing={4} padding={4} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('space-4');
    expect(cardContainer).toHaveClass('pad-4');
    rerender(<VerticalGrid spacing={5} padding={5} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('space-5');
    expect(cardContainer).toHaveClass('pad-5');
    rerender(<VerticalGrid spacing={6} padding={6} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('space-6');
    expect(cardContainer).toHaveClass('pad-6');
    rerender(<VerticalGrid className="test-class" data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('test-class');
  });
})