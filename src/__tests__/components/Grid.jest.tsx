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

  test('renders grid with two columns', () => {
    
    render(
      <Grid columns={2} data-testid="guwmi-grid"></Grid>
    )

    const cardContainer = screen.getByTestId('guwmi-grid');
    expect(cardContainer).toHaveClass('two');
  });

  test('renders grid with three columns', () => {
    
    render(
      <Grid columns={3} data-testid="guwmi-grid"></Grid>
    )

    const cardContainer = screen.getByTestId('guwmi-grid');
    expect(cardContainer).toHaveClass('three');
  });

  test('renders grid with four columns', () => {
    
    render(
      <Grid columns={4} data-testid="guwmi-grid"></Grid>
    )

    const cardContainer = screen.getByTestId('guwmi-grid');
    expect(cardContainer).toHaveClass('four');
  });

  test('renders grid with five columns', () => {
    
    render(
      <Grid columns={5} data-testid="guwmi-grid"></Grid>
    )

    const cardContainer = screen.getByTestId('guwmi-grid');
    expect(cardContainer).toHaveClass('five');
  });

  test('renders grid with six columns', () => {
    
    render(
      <Grid columns={6} data-testid="guwmi-grid"></Grid>
    )

    const cardContainer = screen.getByTestId('guwmi-grid');
    expect(cardContainer).toHaveClass('six');
  });
})