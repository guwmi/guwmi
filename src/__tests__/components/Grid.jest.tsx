// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import Grid from '../../components/Grid/Grid';

describe('Grid Component', () => {

  test('renders with override values', () => {
    
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
    
    const { rerender } = render(<Grid columns={2} spacing={2} data-testid="guwmi-grid"></Grid>)

    const grid = screen.getByTestId('guwmi-grid');
    expect(grid).toHaveClass('col-2');
    expect(grid).toHaveClass('space-2');
    rerender(<Grid columns={3} spacing={3} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('col-3');
    expect(grid).toHaveClass('space-3');
    rerender(<Grid columns={4} spacing={4} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('col-4');
    expect(grid).toHaveClass('space-4');
    rerender(<Grid columns={5} spacing={5} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('col-5');
    expect(grid).toHaveClass('space-5');
    rerender(<Grid columns={6} spacing={6} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('col-6');
    expect(grid).toHaveClass('space-6');
    rerender(<Grid columns="auto" spacing={1} data-testid="guwmi-grid"></Grid>);
    expect(grid).toHaveClass('auto');
    expect(grid).toHaveClass('space-1');
  });
})