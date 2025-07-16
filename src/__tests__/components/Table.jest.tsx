// import library functionality
import { render, screen } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

// import components
import Table from '../../components/Table/Table';

describe('Table Component', () => {

  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
    document.body.innerHTML = '';
  });

  const headers: {
    title: string;
    key: string;
    search?: "includes" | "starts-with";
  }[] = [
    { title: 'Name', key: 'name', search: 'includes' },
    { title: 'Type', key: 'type' },
    { title: 'Status', key: 'status' },
  ];

  const headersStartsWith: {
    title: string;
    key: string;
    search?: "includes" | "starts-with";
  }[] = [
    { title: 'Name', key: 'name' },
    { title: 'Type', key: 'type', search: 'starts-with' },
    { title: 'Status', key: 'status' },
  ];

  const noSearchHeaders: {
    title: string;
    key: string;
    search?: "includes" | "starts-with";
  }[] = [
    { title: 'Name', key: 'name' },
    { title: 'Type', key: 'type' },
    { title: 'Status', key: 'status' },
  ];

  const rows = [
    { id: 1, name: 'Test One', type: 'Windows', status: 'Active', notInHeaders: 'not visible data' },
    { id: 2, name: 'Test Two', type: 'Linux', status: 'Inactive', notInHeaders: 'not visible data' },
    { id: 3, name: 'Test Three', type: 'Mac', status: 'Active', notInHeaders: 'not visible data' },
    { id: 4, name: 'Test Four', type: 'Windows', status: 'Active', notInHeaders: 'not visible data' },
    { id: 5, name: 'Test Five', type: 'Mac', status: 'Active', notInHeaders: 'not visible data' },
    { id: 6, name: 'Test Six', type: 'zLinux', status: 'Inactive', notInHeaders: 'not visible data' },
    { id: 7, name: 'Test Seven', type: 'Windows', status: 'Active', notInHeaders: 'not visible data' },
    { id: 8, name: 'Test Eight', type: 'Linux', status: 'Active', notInHeaders: 'not visible data' },
    { id: 9, name: 'Test Nine', type: 'Windows', status: 'Active', notInHeaders: 'not visible data' },
    { id: 10, name: 'Test Ten', type: 'Windows', status: 'Active', notInHeaders: 'not visible data' }
  ];

  test('renders with appropriate message if no headers are provided', () => {

    render( <Table headers={[]} rows={rows} data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const cell = table.querySelector('tbody').querySelector('td');
    expect(cell).toHaveTextContent('No column headers provided for the table');
  });

  test('renders with appropriate message if no rows are provided', () => {

    render( <Table headers={headers} rows={[]} data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const cell = table.querySelector('tbody').querySelector('td');
    expect(cell).toHaveTextContent('There is no data to display in the table');
  });

  test('renders with all headers and rows', () => {

    render( <Table headers={headers} rows={rows} data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    expect(table).toBeInTheDocument();
    const headerElements = table.querySelector('thead').querySelectorAll('th');
    expect(headerElements).toHaveLength(headers.length);
    const rowElements = table.querySelector('tbody').querySelectorAll('tr');
    expect(rowElements).toHaveLength(rows.length);
  });

  test('renders with override class', () => {

    render( <Table headers={headers} rows={rows} className="override-class" data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    expect(table).toHaveClass('override-class');
  });

  test('renders with condensed class', () => {

    render( <Table headers={headers} rows={rows} isCondensed data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    expect(table).toHaveClass('condensed');
  });

  test('renders without search', () => {

    render( <Table headers={noSearchHeaders} rows={rows} isCondensed data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const searchContainer = table.querySelector('.guwmi-table-search');
    expect(searchContainer).not.toBeInTheDocument();
  });

  test('renders with title and description', () => {

    render( <Table headers={noSearchHeaders} rows={rows} isCondensed data-testid="guwmi-table" title="Test Title" description="Test Description" /> );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  test('renders with search input and search functionality works as intended', async () => {

    const { rerender } = render( <Table headers={headers} rows={rows} data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const searchContainer = table.querySelector('.guwmi-table-search');
    expect(searchContainer).toBeInTheDocument();
    const input = searchContainer.querySelector('.guwmi-search-input').querySelector('input');
    input.focus();
    await user.keyboard('one');
    expect(screen.getByText('Test One')).toBeInTheDocument();
    await user.clear(input);

    rerender( <Table headers={headersStartsWith} rows={rows} data-testid="guwmi-table" /> );

    await user.keyboard('win');
    expect(screen.getAllByText('Windows')).toHaveLength(5);
  });

  test('renders with pagination', () => {

    render( <Table headers={noSearchHeaders} rows={rows} isCondensed hasPagination data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const pagination = table.querySelector('.guwmi-pagination');
    expect(pagination).toBeInTheDocument();
  });

  test('renders with skeleton classes', () => {

    render( <Table headers={[]} rows={rows} data-testid="guwmi-table" title="Test title" description="Test description" skeleton /> );

    const table = screen.getByTestId('guwmi-table');
    const skeletonCells = table.querySelector('table').querySelectorAll('.guwmi-skeleton');
    const title = screen.getByText('Test title');
    const desc = screen.getByText('Test description');
    expect(skeletonCells).toHaveLength(24);
    expect(title).toHaveClass('guwmi-skeleton');
    expect(desc).toHaveClass('guwmi-skeleton');
  });
})