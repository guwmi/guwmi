// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component
import Toggle from '../../../components/Inputs/Toggle/Toggle';

describe('Toggle Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('renders with defaults', () => {

    render (<Toggle label="Test toggle" data-testid="guwmi-toggle" />);

    const inputContainer = screen.getByTestId('guwmi-toggle');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Test toggle");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('renders with override values', () => {

    render(
      <Toggle
        label="Test toggle"
        id="test-id"
        name="test-name"
        disabled
        value="test-value"
        readOnly
        className="override-class"
        data-testid="guwmi-toggle"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-toggle');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Test toggle");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveClass('override-class');
    expect(inputContainer).toHaveClass('disabled');
    expect(label).toBeInTheDocument();
    expect(input).toHaveProperty('disabled');
    expect(input).toHaveProperty('readOnly');
    expect(input).toHaveAttribute('name', 'test-name');
    expect(input).toHaveAttribute('id', 'test-id');
    expect(input).toHaveAttribute('value', 'test-value');
  });

  test('correctly handles user events', async () => {

    const changeHandler = jest.fn();
    const blurHandler = jest.fn();
    const focusHandler = jest.fn();

    render(
      <Toggle
        label="Test toggle"
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        data-testid="guwmi-toggle"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-toggle');
    const input = inputContainer.querySelector('input');
    input.focus();
    await user.click(input);
    input.blur();
    expect(focusHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(blurHandler).toHaveBeenCalledTimes(1);
  });

  test('renders with skeleton classes', () => {

    render (<Toggle label="Test toggle" data-testid="guwmi-toggle" skeleton />);

    const inputContainer = screen.getByTestId('guwmi-toggle').querySelector('.guwmi-toggle-container');
    const label = screen.getByText("Test toggle");
    expect(inputContainer).toHaveClass('guwmi-skeleton');
    expect(label).toHaveClass('guwmi-skeleton');
  });
});