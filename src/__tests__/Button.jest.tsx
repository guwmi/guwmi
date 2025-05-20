// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import component to test
import Button from '../components/Button/Button';

describe('Button', () => {
  test('renders with children', () => {
    render(<Button>Hello Button</Button>);
    expect(screen.getByText('Hello Button')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders as link with correct href', () => {
    render(<Button href="https://www.google.com">Target Link</Button>);
    const link = screen.getByText('Target Link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://www.google.com');
  });

  test('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled Button</Button>);
    fireEvent.click(screen.getByText('Disabled Button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeDisabled();
  });

  test('renders with target attribute', () => {
    render(<Button target="_blank" href="https://www.google.com">Target Link</Button>);
    expect(screen.getByText('Target Link')).toHaveAttribute('target', '_blank');
  });

  test('applies custom className', () => {
    render(<Button className="extra-class">Styled Button</Button>);
    const button = screen.getByText('Styled Button');
    expect(button).toHaveClass('extra-class');
  });

  test('renders with correct defaults', () => {
    render(<Button>Default Button</Button>);
    const button = screen.getByText('Default Button');
    expect(button).toHaveClass(/round/);
    expect(button).toHaveClass(/md/);
    expect(button).toHaveClass(/primary/);
    expect(button).toHaveClass(/fill/);
  });

  test('renders with override size', () => {
    render(<Button size="sm">Small Button</Button>);
    const button = screen.getByText('Small Button');
    expect(button).toHaveClass(/sm/);
  });

  test('renders with override color', () => {
    render(<Button color="danger">Danger Button</Button>);
    const button = screen.getByText('Danger Button');
    expect(button).toHaveClass(/danger/);
  });

  test('renders with override variant', () => {
    render(<Button variant="fill">Fill Button</Button>);
    const button = screen.getByText('Fill Button');
    expect(button).toHaveClass(/fill/);
  });

  test('renders with override theme', () => {
    render(<Button theme="pill">Pill Button</Button>);
    const button = screen.getByText('Pill Button');
    expect(button).toHaveClass(/pill/);
  });
});