// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Tag from '../../components/Tag/Tag';

describe('Tag Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  test('renders with correct text', () => {

    render(<Tag value="Test value" />);

    const button = screen.getByText('Test value');
    expect(button).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', async () => {

    const handleClick = jest.fn();
    render(<Tag value="Button tag" onClick={handleClick} />);

    const button = screen.getByRole('button');
    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('renders as link with correct href', () => {

    render(<Tag value="Link tag" href="https://www.google.com" />);

    const link = screen.getByText('Link tag');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', 'https://www.google.com');
  });

  test('does not call onClick handler when disabled', async () => {

    const handleClick = jest.fn();
    render(<Tag value="Button tag - disabled" onClick={handleClick} disabled />);

    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('renders disabled button when passed href and disabled properties', async () => {

    const handleClick = jest.fn();
    render(<Tag value="Link tag - disabled" href="https://www.google.com" disabled />);

    const button = screen.getByText('Link tag - disabled');
    expect(button).toBeDisabled();
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  })

  test('renders with target attribute', () => {

    render(<Tag value="Link tag - target" target="_blank" href="https://www.google.com" />);

    const link = screen.getByText('Link tag - target');
    expect(link).toHaveAttribute('target', '_blank');
  });

  test('renders with correct defaults', () => {

    render(<Tag value="Tag" />);

    const button = screen.getByText('Tag');
    expect(button).toHaveClass('md');
    expect(button).toHaveClass('neutral');
  });

  test('renders with override values', () => {

    render(<Tag value="Tag" size="sm" variant="primary" className="override-class" />);

    const button = screen.getByText('Tag');
    expect(button).toHaveClass('sm');
    expect(button).toHaveClass('primary');
    expect(button).toHaveClass('override-class');
  });

  test('renders with skeleton class', () => {

    render(<Tag value="Tag" loading />);

    const button = screen.getByText('Tag');
    expect(button).toHaveClass('guwmi-skeleton');
  });
});