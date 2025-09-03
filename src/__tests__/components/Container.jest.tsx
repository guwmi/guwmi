// import library functionality
import { render, screen, waitFor } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import components
import Container from '../../components/Container/Container';
import Icon from '../..//components/Icon/Icon';

describe('Container Component', () => {

  const mockOpen = jest.fn();
  const mockClose = jest.fn();
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  })

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

  test('renders with override class and aria', () => {

    render (
      <Container className="override-class" sidebarAria='Test aria' sidebar={<>Test sidebar</>} data-testid="guwmi-container">
        Test content
      </Container>
    )

    const container = screen.getByTestId('guwmi-container');
    const sidebar = screen.getByLabelText('Test aria');
    expect(container).toHaveClass('override-class');
    expect(sidebar).toBeInTheDocument();
  });

  test('renders sidebar as drawer', async () => {

    render (
      <Container data-testid="guwmi-container" header={<h1>Test header</h1>} sidebar={<>Test sidebar</>} sidebarIsDrawer>
        Test content
      </Container>
    )

    const sidebarButton = screen.getByLabelText('Open application sidebar');
    expect(sidebarButton).toBeInTheDocument();
    await user.click(sidebarButton);
    await waitFor(() => {
      expect(screen.getByText('Test sidebar')).toBeInTheDocument();
    });
    const closeButton = screen.getByRole('button', {name: 'Close drawer'});
    await user.click(closeButton);
    expect(screen.queryAllByText('Test sidebar')).toHaveLength(0);
  });

  test('renders sidebar as drawer with overrides', async () => {

    render (
      <Container
        data-testid="guwmi-container"
        header={<h1>Test header</h1>}
        sidebar={<>Test sidebar</>}
        sidebarButtonIcon={<Icon name="dots" />}
        sidebarDrawerState={{isOpen: true, onOpen: mockOpen, onClose: mockClose}}
        sidebarAria="Test aria"
        sidebarIsDrawer
      >
        Test content
      </Container>
    )

    const sidebarButton = screen.getByLabelText('Open Test aria');
    const icon = screen.getByLabelText('dots');
    const closeButton = screen.getByRole('button', {name: 'Close drawer'});
    expect(sidebarButton).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(screen.getByText('Test sidebar')).toBeInTheDocument();
    await user.click(closeButton);
    expect(mockClose).toHaveBeenCalled();
    await user.click(sidebarButton);
    expect(mockOpen).toHaveBeenCalled();
  });
})