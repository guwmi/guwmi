// import library functionality
import { render, screen } from '@testing-library/react';

// import components
import Container from '../../components/Container/Container';

describe('Container Component', () => {

  test('renders with content in the main element', () => {

    render (
      <Container>
        Test content
      </Container>
    )

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveTextContent('Test content');
  });

  test('renders with content in the header element', () => {

    render (
      <Container header={<>Test header</>}>
        Test content
      </Container>
    )

    const header = screen.getByRole('banner');
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent('Test header');
  });

  test('renders with content in the sidebar element', () => {

    render (
      <Container sidebar={<>Test sidebar</>}>
        Test content
      </Container>
    )

    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveTextContent('Test sidebar');
  });

  test('renders with override class', () => {

    render (
      <Container className="override-class" data-testid="guwmi-container">
        Test content
      </Container>
    )

    const container = screen.getByTestId('guwmi-container');
    expect(container).toHaveClass('override-class');
  });
})