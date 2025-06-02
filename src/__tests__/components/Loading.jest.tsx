// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import component to test
import Loading from '../../components/Loading/Loading';

describe('Loading Component', () => {

  test('does not render if inative', () => {

    render ( <Loading active={false} data-testid="guwmi-loading-container" /> );

    const container = screen.queryAllByTestId('guwmi-loading-container');
    expect(container).toHaveLength(0);
  });

  test('renders with default values', () => {

    render ( <Loading active={true} data-testid="guwmi-loading-container" /> );

    const container = screen.getByTestId('guwmi-loading-container');
    expect(container).toHaveClass('md');
    expect(container).toHaveClass('normal');
    expect(container).toHaveClass('block');
  });

  test('renders with override values', () => {

    render ( 
      <Loading
        active={true}
        size="sm"
        speed="slow"
        position="full-screen"
        overlay={true}
        data-testid="guwmi-loading-container"
      />
    );

    const container = screen.getByTestId('guwmi-loading-container');
    expect(container).toHaveClass('sm');
    expect(container).toHaveClass('slow');
    expect(container).toHaveClass('full-screen');
    expect(container).toHaveClass('overlay');
  });
})