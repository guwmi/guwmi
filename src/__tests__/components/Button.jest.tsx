// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Button from '../../components/Button/Button';

describe('Button Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    jest.clearAllMocks();
  })

  test('renders with children', () => {

    render(<Button>Hello Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', async () => {

    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders as link with correct href', () => {

    render(<Button href="https://www.google.com">Link</Button>);

    const link = screen.getByText('Link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://www.google.com');
  });

  test('does not call onClick handler when disabled', async () => {

    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled Button</Button>);

    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('is disabled when disabled prop is true', () => {

    render(<Button disabled>Click Me</Button>);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('renders with target attribute', () => {

    render(<Button target="_blank" href="https://www.google.com">Target Link</Button>);

    const link = screen.getByText('Target Link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('renders with override class', () => {

    render(<Button className="override-class">Styled Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('override-class');
  });

  test('renders with skeleton class', () => {

    render(<Button loading>Styled Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('guwmi-skeleton');
  });

  test('renders with correct defaults', () => {

    render(<Button>Default Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/round/);
    expect(button).toHaveClass(/md/);
    expect(button).toHaveClass(/primary/);
    expect(button).toHaveClass(/fill/);
  });

  test('renders with override size', () => {

    render(<Button size="sm">Small Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/sm/);
  });

  test('renders with override color', () => {

    render(<Button color="danger">Danger Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/danger/);
  });

  test('renders with override variant', () => {

    render(<Button variant="fill">Fill Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/fill/);
  });

  test('renders with override theme', () => {

    render(<Button theme="pill">Pill Button</Button>);

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/pill/);
  });
});