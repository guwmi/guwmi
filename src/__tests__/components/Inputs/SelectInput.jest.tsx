// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component
import SelectInput from '../../../components/Inputs/Select/SelectInput';

describe('SelectInput Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('renders with default values', () => {
    
    render(
      <SelectInput
        label="Select Label"
        options={[
          {name: 'Option one', value: 'one'},
          {name: 'Option two', value: 'two'},
          {name: 'Option three', value: 'three'},
          {name: 'Option four', value: 'four'},
          {name: 'Option five', value: 'five'},
        ]}
        data-testid="guwmi-select-input"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-select-input');
    const input = inputContainer.querySelector('select');
    const label = screen.getByText("Select Label");
    const options = inputContainer.querySelectorAll('option');
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(inputContainer).not.toHaveClass('error');
    expect(input).toHaveProperty('id');
    expect(options).toHaveLength(5);
  });

  test('renders with override values', () => {

    render(
      <SelectInput
        label="Select Label"
        hasError={true}
        error="Select input error message."
        disabled
        value="three"
        name="test-select-name"
        id="test-select-id"
        options={[
          {name: 'Option one', value: 'one'},
          {name: 'Option two', value: 'two', disabled: true},
          {name: 'Option three', value: 'three'},
          {name: 'Option four', value: 'four'},
          {name: 'Option five', value: 'five'},
        ]}
        className="override-class"
        data-testid="guwmi-select-input"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-select-input');
    const input = inputContainer.querySelector('select');
    const error = screen.getByText("Select input error message.");
    expect(inputContainer).toBeInTheDocument();
    expect(error).toBeInTheDocument();
    expect(inputContainer).toHaveClass('error');
    expect(inputContainer).toHaveClass('override-class');
    expect(input).toHaveProperty('disabled');
    expect(input).toHaveAttribute('name', 'test-select-name');
    expect(input).toHaveAttribute('id', 'test-select-id');
    expect(input).toHaveValue('three');
  });

  test('correctly handles uder events', async () => {

    const changeHandler = jest.fn();
    const blurHandler = jest.fn();
    const focusHandler = jest.fn();
    
    render(
      <SelectInput
        label="Select Label"
        options={[
          {name: 'Option one', value: 'one'},
          {name: 'Option two', value: 'two'},
          {name: 'Option three', value: 'three'},
          {name: 'Option four', value: 'four'},
          {name: 'Option five', value: 'five'},
        ]}
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        data-testid="guwmi-select-input"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-select-input');
    const input = inputContainer.querySelector('select');
    input.focus();
    await user.selectOptions(input, 'five');
    input.blur();
    expect(focusHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledTimes(1);
    expect(blurHandler).toHaveBeenCalledTimes(1);
  });

  test('renders with default values', () => {
    
    render(
      <SelectInput
        label="Select Label"
        options={[
          {name: 'Option one', value: 'one'},
          {name: 'Option two', value: 'two'},
          {name: 'Option three', value: 'three'},
          {name: 'Option four', value: 'four'},
          {name: 'Option five', value: 'five'},
        ]}
        data-testid="guwmi-select-input"
        skeleton
      />
    )

    const inputContainer = screen.getByTestId('guwmi-select-input').querySelector('.guwmi-select-container');
    const label = screen.getByText("Select Label");
    expect(inputContainer).toHaveClass('guwmi-skeleton');
    expect(label).toHaveClass('guwmi-skeleton');
  });
});