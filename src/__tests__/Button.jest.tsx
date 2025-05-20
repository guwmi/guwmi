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

  test('does not call onClick handler when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Disabled Button</Button>);
    fireEvent.click(screen.getByText('Disabled Button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('applies custom className', () => {
    render(<Button className="extra-class">Styled Button</Button>);
    const button = screen.getByText('Styled Button');
    expect(button).toHaveClass('extra-class');
  });

  test('renders with round variant by default', () => {
    render(<Button>Default</Button>);
    const button = screen.getByText('Default');
    // Using a regex to match the generated CSS module class
    expect(button).toHaveClass(/round/); // Matches a class containing 'primary'
  });

  test('renders with fill variant', () => {
    render(<Button variant="fill">Fill</Button>);
    const button = screen.getByText('Fill');
    expect(button).toHaveClass(/fill/);
  });

  test('is disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeDisabled();
  });
});