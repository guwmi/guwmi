// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component
import SearchInput from '../../../components/Inputs/Search/SearchInput';

describe('SearchInput Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  test('renders with the correct defaults', () => {

    render(
      <SearchInput
        label="Search Input Label"
        data-testid="guwmi-search-input"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-search-input');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Search Input Label");
    expect(inputContainer).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(input).toHaveProperty('id');
  })

  test('renders with correct proprty overrides', () => {

    render(
      <SearchInput
        label="Search Input Label"
        placeholder="Search Input Placeholder"
        disabled
        readOnly
        value="Search input value"
        maxLength={5}
        name="search-input-name"
        id="search-input-id"
        className="override-class"
        data-testid="guwmi-search-input"
      />
    )

    const inputContainer = screen.getByTestId('guwmi-search-input');
    const input = inputContainer.querySelector('input');
    const label = screen.getByText("Search Input Label");
    expect(inputContainer).toBeInTheDocument();
    expect(inputContainer).toHaveClass('override-class');
    expect(label).toBeInTheDocument();
    expect(input).toHaveProperty('disabled');
    expect(input).toHaveProperty('readOnly');
    expect(input).toHaveAttribute('placeholder', 'Search Input Placeholder');
    expect(input).toHaveAttribute('value', 'Search input value');
    expect(input).toHaveAttribute('maxLength', '5');
    expect(input).toHaveAttribute('name', 'search-input-name');
    expect(input).toHaveAttribute('id', 'search-input-id');
  });

  test('correctly handles user events', async () => {

    const changeHandler = jest.fn();
    const blurHandler = jest.fn();
    const focusHandler = jest.fn();

    render(
      <SearchInput
        label="Search Input Label"
        data-testid="guwmi-search-input"
        onChange={changeHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
      />
    )

    const inputContainer = screen.getByTestId('guwmi-search-input');
    const input = inputContainer.querySelector('input');
    input.focus();
    await user.type(input, 'abc');
    input.blur();
    expect(focusHandler).toHaveBeenCalledTimes(1);
    expect(changeHandler).toHaveBeenCalledTimes(3);
    expect(blurHandler).toHaveBeenCalledTimes(1);
  });

  test('renders with the correct defaults', () => {

    render(
      <SearchInput
        label="Search Input Label"
        data-testid="guwmi-search-input"
        skeleton
      />
    )

    const inputContainer = screen.getByTestId('guwmi-search-input');
    expect(inputContainer).toHaveClass('guwmi-skeleton');
  });
})