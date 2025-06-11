// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component
import RadioGroup from '@components/Inputs/RadioGroup/RadioGroup';

describe('RadioGroup', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('renders with defaults', () => {

    render(
      <RadioGroup
        label="Radio group label"
        options={[
          {name: 'Option one', value: 'one'},
          {name: 'Option two', value: 'two'},
          {name: 'Option three', value: 'three', disabled: true},
          {name: 'Option four', value: 'four'},
          {name: 'Option five', value: 'five'},
        ]}
        data-testid="guwmi-radio-group"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-radio-group');
    const fieldset = inputContainer.querySelector('fieldset');
    const inputs = inputContainer.querySelectorAll('input');
    const label = screen.getByText("Radio group label");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(fieldset).toBeInTheDocument();
    expect(inputContainer).not.toHaveClass('error');
    expect(inputs).toHaveLength(5);
  });

  test('renders with override values', () => {

    render(
      <RadioGroup
        label="Radio group label"
        options={[
          {name: 'Option one', value: 'one'},
          {name: 'Option two', value: 'two'},
          {name: 'Option three', value: 'three', disabled: true},
          {name: 'Option four', value: 'four'},
          {name: 'Option five', value: 'five'},
        ]}
        hasError={true}
        error="Radio group error message."
        disabled
        name="radio-group-name"
        id="radio-group-id"
        layout="row"
        className="override-class"
        data-testid="guwmi-radio-group"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-radio-group');
    const fieldset = inputContainer.querySelector('fieldset');
    const radioContainer = inputContainer.querySelector('.guwmi-radio-container');
    const label = screen.getByText("Radio group label");
    const error = screen.getByText("Radio group error message.");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(error).toBeInTheDocument();
    expect(inputContainer).toHaveClass('error');
    expect(inputContainer).toHaveClass('override-class');
    expect(fieldset).toHaveProperty('disabled');
    expect(fieldset).toHaveAttribute('name', 'radio-group-name');
    expect(fieldset).toHaveAttribute('id', 'radio-group-id');
    expect(radioContainer).toHaveClass('row');
  });

  test('correctly handles user events', async () => {

    const changeHandler = jest.fn();
    const blurHandler = jest.fn();
    const focusHandler = jest.fn();

    render(
      <RadioGroup
        label="Radio group label"
        options={[
          {name: 'Option one', value: 'one'},
          {name: 'Option two', value: 'two'},
          {name: 'Option three', value: 'three', disabled: true},
          {name: 'Option four', value: 'four'},
          {name: 'Option five', value: 'five'},
        ]}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        data-testid="guwmi-radio-group"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-radio-group');
    const inputs = inputContainer.querySelectorAll('input');
    inputs[0].focus();
    await user.click(inputs[0]);
    inputs[0].blur();
    expect(focusHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(blurHandler).toHaveBeenCalledTimes(1);
  });

});