// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import component to test
import Pagination from '../../components/Pagination/Pagination';

describe('Pagination Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    jest.clearAllMocks();
  })

  test('renders correctly', () => {

    const handleOnChange = jest.fn();
    render (
      <Pagination
        pageSizes={[5,10,20,50]}
        totalItems={100}
        currentSize={5}
        currentPage={1}
        onChange={handleOnChange}
        data-testid="guwmi-pagination"
      />
    )
    const pagination = screen.getByTestId('guwmi-pagination');
    expect(pagination).toBeInTheDocument();
  });

  test('renders with override class', () => {

    const handleOnChange = jest.fn();
    const { rerender } = render (
      <Pagination
        pageSizes={[5,10,20,50]}
        totalItems={100}
        currentSize={5}
        onChange={handleOnChange}
        data-testid="guwmi-pagination"
        className="override-class"
      />
    )
    const pagination = screen.getByTestId('guwmi-pagination');
    const textLocation = pagination.querySelector('.guwmi-pagination-current-info').querySelector('p');
    expect(pagination).toHaveClass('override-class');
    expect(textLocation).toHaveTextContent('Showing 1–5 of 100 items');
    rerender (
      <Pagination
        pageSizes={[5,10,20,50]}
        totalItems={4}
        currentSize={5}
        onChange={handleOnChange}
        data-testid="guwmi-pagination"
      />
    )
    expect(textLocation).toHaveTextContent('Showing 1–4 of 4 items');
  });

  test('correctly handles on change events', async () => {

    const handleOnChange = jest.fn();
    render (
      <Pagination
        pageSizes={[5,10,20,50]}
        totalItems={100}
        currentSize={5}
        currentPage={1}
        onChange={handleOnChange}
        data-testid="guwmi-pagination"
      />
    )
    const pagination = screen.getByTestId('guwmi-pagination');
    const nextButton = screen.getByRole('button', {name: /Next page/});
    const prevButton = screen.getByRole('button', {name: /Previous page/});
    const sizeSelect = screen.getByLabelText(/Items per page/);
    const pageSelect = pagination.querySelector('.guwmi-pagination-navigation').querySelector('select');
    await user.click(nextButton);
    expect(handleOnChange).toHaveBeenCalledTimes(1);
    await user.click(prevButton);
    expect(handleOnChange).toHaveBeenCalledTimes(2);
    await user.selectOptions(sizeSelect, '10');
    expect(handleOnChange).toHaveBeenCalledTimes(3);
    await user.selectOptions(sizeSelect, '10');
    expect(handleOnChange).toHaveBeenCalledTimes(3);
    await user.selectOptions(pageSelect, '2');
    expect(handleOnChange).toHaveBeenCalledTimes(4);
  });

  test('renders with skeleton class', () => {

    const handleOnChange = jest.fn();
    render (
      <Pagination
        pageSizes={[5,10,20,50]}
        totalItems={100}
        currentSize={5}
        currentPage={1}
        onChange={handleOnChange}
        data-testid="guwmi-pagination"
        skeleton
      />
    )
    const pagination = screen.getByTestId('guwmi-pagination');
    expect(pagination).toHaveClass('guwmi-skeleton');
  });
})