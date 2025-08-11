// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component
import Checkbox from '../../../components/Inputs/Checkbox/Checkbox';

describe('Checkbox Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('renders with defaults', () => {

    render (<Checkbox label="Test checkbox" data-testid="guwmi-checkbox" />);

    const inputContainer = screen.getByTestId('guwmi-checkbox');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Test checkbox");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('renders with override values', () => {

    render(
      <Checkbox
        label="Test checkbox"
        id="test-id"
        name="test-name"
        disabled
        className="override-class"
        data-testid="guwmi-checkbox"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-checkbox');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Test checkbox");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveClass('override-class');
    expect(inputContainer).toHaveClass('disabled');
    expect(label).toBeInTheDocument();
    expect(input).toHaveProperty('disabled');
    expect(input).toHaveAttribute('name', 'test-name');
    expect(input).toHaveAttribute('id', 'test-id');
  });

  test('correctly handles user events', async () => {

    const changeHandler = jest.fn();
    const blurHandler = jest.fn();
    const focusHandler = jest.fn();

    render(
      <Checkbox
        label="Test checkbox"
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        data-testid="guwmi-checkbox"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-checkbox');
    const input = inputContainer.querySelector('input');
    input.focus();
    await user.click(input);
    input.blur();
    expect(focusHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(blurHandler).toHaveBeenCalledTimes(1);
  });

  test('renders with skeleton classes and disabled', () => {

    render (<Checkbox label="Test checkbox" data-testid="guwmi-checkbox" skeleton/>);

    const inputContainer = screen.getByTestId('guwmi-checkbox').querySelector('.guwmi-checkbox-container');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Test checkbox");
    expect(inputContainer).toHaveClass('guwmi-skeleton');
    expect(label).toHaveClass('guwmi-skeleton');
    expect(input).toBeDisabled();
  });
});