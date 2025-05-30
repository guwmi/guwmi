// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import VerticalGrid from '@components/VerticalGrid/VerticalGrid';

describe('VerticalGrid', () => {

  test('renders vertical grid with correct spacing classes', () => {
    
    const { rerender } = render(<VerticalGrid data-testid="guwmi-vertical-grid"></VerticalGrid>)

    const cardContainer = screen.getByTestId('guwmi-vertical-grid');
    expect(cardContainer).toHaveClass('two');
    rerender(<VerticalGrid spacing={1} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('one');
    rerender(<VerticalGrid spacing={2} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('two');
    rerender(<VerticalGrid spacing={3} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('three');
    rerender(<VerticalGrid spacing={4} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('four');
    rerender(<VerticalGrid spacing={5} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('five');
    rerender(<VerticalGrid spacing={6} data-testid="guwmi-vertical-grid"></VerticalGrid>);
    expect(cardContainer).toHaveClass('six');
  });
})