// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import Grid from '@components/Grid/Grid';

describe('Grid', () => {

  test('renders grid with override classes', () => {
    
    const { rerender } = render(
      <Grid wrap="no-wrap" rowOrder="reverse" align="right" data-testid="guwmi-grid"></Grid>
    )

    const cardContainer = screen.getByTestId('guwmi-grid');
    expect(cardContainer).toHaveClass('no-wrap');
    expect(cardContainer).toHaveClass('reverse');
    expect(cardContainer).toHaveClass('right');
    rerender(<Grid align="center" data-testid="guwmi-grid"></Grid>);
    expect(cardContainer).toHaveClass('center');
  });

  test('renders grid with correct column width classes', () => {
    
    const { rerender } = render(<Grid columns={2} data-testid="guwmi-grid"></Grid>)

    const cardContainer = screen.getByTestId('guwmi-grid');
    expect(cardContainer).toHaveClass('two');
    rerender(<Grid columns={3} data-testid="guwmi-grid"></Grid>);
    expect(cardContainer).toHaveClass('three');
    rerender(<Grid columns={4} data-testid="guwmi-grid"></Grid>);
    expect(cardContainer).toHaveClass('four');
    rerender(<Grid columns={5} data-testid="guwmi-grid"></Grid>);
    expect(cardContainer).toHaveClass('five');
    rerender(<Grid columns={6} data-testid="guwmi-grid"></Grid>);
    expect(cardContainer).toHaveClass('six');
    rerender(<Grid columns="auto" data-testid="guwmi-grid"></Grid>);
    expect(cardContainer).toHaveClass('auto');
  });
})