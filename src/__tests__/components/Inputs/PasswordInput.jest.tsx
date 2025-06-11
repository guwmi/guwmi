// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component
import PasswordInput from '@components/Inputs/Password/PasswordInput';

describe('PasswordInput', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('renders with the correct defaults', () => {

    render(
      <PasswordInput
        label="Password Input Label"
        data-testid="guwmi-text-input"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-text-input');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Password Input Label");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(inputContainer).not.toHaveClass('error');
    expect(input).toHaveProperty('id');
    expect(input).toHaveAttribute('type', 'password');
  })

  test('renders with correct proprty overrides', () => {

    render(
      <PasswordInput
        label="Password Input Label"
        hideLabel
        placeholder="Password Input Placeholder"
        hasError={true}
        error="Password input error message."
        disabled
        readOnly
        value="Password input value"
        maxLength={5}
        name="text-input-name"
        id="text-input-id"
        className="override-class"
        data-testid="guwmi-text-input"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-text-input');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Password Input Label");
    const error = screen.getByText("Password input error message.");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('guwmi-sr-only');
    expect(error).toBeInTheDocument();
    expect(inputContainer).toHaveClass('error');
    expect(inputContainer).toHaveClass('override-class');
    expect(input).toHaveProperty('disabled');
    expect(input).toHaveProperty('readOnly');
    expect(input).toHaveAttribute('value', 'Password input value');
    expect(input).toHaveAttribute('maxLength', '5');
    expect(input).toHaveAttribute('name', 'text-input-name');
    expect(input).toHaveAttribute('id', 'text-input-id');
  });

  test('correctly handles user events', async () => {

    const changeHandler = jest.fn();
    const blurHandler = jest.fn();
    const focusHandler = jest.fn();

    render(
      <PasswordInput
        label="Password Input Label"
        data-testid="guwmi-text-input"
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
      />
    )

    const inputContainer = screen.getByTestId('guwmi-text-input');
    const input = inputContainer.querySelector('input');
    const viewButton = inputContainer.querySelector('button');
    input.focus();
    await user.type(input, 'abc');
    input.blur();
    expect(focusHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledTimes(3);
    expect(blurHandler).toHaveBeenCalledTimes(1);
    await user.click(viewButton);
    expect(input).toHaveAttribute('type', 'text');
    await user.click(viewButton);
    expect(input).toHaveAttribute('type', 'password');
  })
})