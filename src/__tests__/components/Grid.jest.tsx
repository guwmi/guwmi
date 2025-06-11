// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import Grid from '@components/Grid/Grid';

describe('Grid', () => {

  test('renders grid with override classes', () => {
    
    const { rerender } = render(
      <Grid wrap="no-wrap" rowOrder="reverse" align="right" className="override-class" data-testid="guwmi-grid"></Grid>
    )

    const grid = screen.getByTestId('guwmi-grid');
    expect(grid).toHaveClass('no-wrap');
    expect(grid).toHaveClass('reverse');
    expect(grid).toHaveClass('right');
    expect(grid).toHaveClass('override-class');
    rerender(<Grid align="center" data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('center');
  });

  test('renders grid with correct column width classes', () => {
    
    const { rerender } = render(<Grid columns={2} data-testid="guwmi-grid"></Grid>)

    const grid = screen.getByTestId('guwmi-grid');
    expect(grid).toHaveClass('two');
    rerender(<Grid columns={3} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('three');
    rerender(<Grid columns={4} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('four');
    rerender(<Grid columns={5} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('five');
    rerender(<Grid columns={6} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('six');
    rerender(<Grid columns="auto" data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('auto');
  });
})