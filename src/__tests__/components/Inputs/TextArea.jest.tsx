// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component
import TextArea from '@components/Inputs/TextArea/TextArea';

describe('TextArea', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('renders with the correct defaults', () => {

    render(
      <TextArea
        label="Text Area Label"
        data-testid="guwmi-text-area"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-text-area');
    const input = inputContainer.querySelector('textarea');
    const label = screen.getByText("Text Area Label");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(inputContainer).not.toHaveClass('error');
    expect(input).toHaveProperty('id');
  })

  test('renders with correct proprty overrides', () => {

    render(
      <TextArea
        label="Text Area Label"
        hideLabel
        placeholder="Text Area Placeholder"
        hasError={true}
        error="Text Area error message."
        disabled
        readOnly
        value="Text Area value"
        maxLength={5}
        rows={10}
        name="text-area-name"
        id="text-area-id"
        className="override-class"
        data-testid="guwmi-text-area"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-text-area');
    const input = inputContainer.querySelector('textarea');
    const label = screen.getByText("Text Area Label");
    const error = screen.getByText("Text Area error message.");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label).toHaveClass('guwmi-sr-only');
    expect(error).toBeInTheDocument();
    expect(inputContainer).toHaveClass('error');
    expect(inputContainer).toHaveClass('override-class');
    expect(input).toHaveProperty('disabled');
    expect(input).toHaveProperty('readOnly');
    expect(input).toHaveTextContent('Text Area value')
    expect(input).toHaveAttribute('placeholder', 'Text Area Placeholder');
    expect(input).toHaveAttribute('maxLength', '5');
    expect(input).toHaveAttribute('name', 'text-area-name');
    expect(input).toHaveAttribute('id', 'text-area-id');
  });

  test('correctly handles user events', async () => {

    const changeHandler = jest.fn();
    const blurHandler = jest.fn();
    const focusHandler = jest.fn();

    render(
      <TextArea
        label="Text Area Label"
        data-testid="guwmi-text-area"
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
      />
    )

    const inputContainer = screen.getByTestId('guwmi-text-area');
    const input = inputContainer.querySelector('textarea');
    input.focus();
    await user.type(input, 'abc');
    input.blur();
    expect(focusHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledTimes(3);
    expect(blurHandler).toHaveBeenCalledTimes(1);
  })
})