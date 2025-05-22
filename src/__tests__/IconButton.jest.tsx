// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import component to test
import IconButton from '@components/IconButton/IconButton';
import Icon from '@components/Icon/Icon';

describe('Icon Button', () => {

  test('renders with children', () => {

    render(
      <IconButton ariaLabel="test aria">
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {

    const handleClick = jest.fn();
    render(
      <IconButton ariaLabel="test aria" onClick={handleClick}>
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('does not call onClick handler when disabled', () => {

    const handleClick = jest.fn();
    render(
      <IconButton ariaLabel="test aria" onClick={handleClick} disabled>
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('is disabled when disabled prop is true', () => {

    render(
      <IconButton ariaLabel="test aria" disabled>
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('applies custom className', () => {

    render(
      <IconButton ariaLabel="test aria" className="extra-class">
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass('extra-class');
  });

  test('renders with correct defaults', () => {

    render(
      <IconButton ariaLabel="test aria">
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/round/);
    expect(button).toHaveClass(/md/);
    expect(button).toHaveClass(/primary/);
    expect(button).toHaveClass(/fill/);
  });

  test('renders with override size', () => {

    render(
      <IconButton ariaLabel="test aria" size="sm">
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/sm/);
  });

  test('renders with override color', () => {

    render(
      <IconButton ariaLabel="test aria" color="danger">
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/danger/);
  });

  test('renders with override variant', () => {

    render(
      <IconButton ariaLabel="test aria" variant="fill">
        <Icon name="menu" />
      </IconButton>
    );

    const button = screen.getByRole('button');
    expect(button).toHaveClass(/fill/);
  });

  test('renders with override theme', () => {

    render(
      <IconButton ariaLabel="test aria" theme="circle">
        <Icon name="menu" />
      </IconButton>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveClass(/circle/);
  });
});