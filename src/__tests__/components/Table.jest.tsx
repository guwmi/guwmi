// import library functionality
import { render, screen, fireEvent } from '@testing-library/react';

// import components
import Table from '@components/Table/Table';

describe('Table', () => {

  const headers = [
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

    render( <Table headers={[]} rows={rows} isSearchable data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const cell = table.querySelector('tbody').querySelector('td');
    expect(cell).toHaveTextContent('No column headers provided for the table');
  });

  test('renders with appropriate message if no rows are provided', () => {

    render( <Table headers={headers} rows={[]} isSearchable data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const cell = table.querySelector('tbody').querySelector('td');
    expect(cell).toHaveTextContent('There is no data to display in the table');
  });

  test('renders table with all headers and rows', () => {

    render( <Table headers={headers} rows={rows} data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    expect(table).toBeInTheDocument();
    const headerElements = table.querySelector('thead').querySelectorAll('th');
    expect(headerElements).toHaveLength(headers.length);
    const rowElements = table.querySelector('tbody').querySelectorAll('tr');
    expect(rowElements).toHaveLength(rows.length);
  });

  test('renders table with condensed class', () => {

    render( <Table headers={headers} rows={rows} isCondensed data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    expect(table).toHaveClass('condensed');
  });

  test('renders table with search input', () => {

    render( <Table headers={headers} rows={rows} isSearchable data-testid="guwmi-table" /> );

    const table = screen.getByTestId('guwmi-table');
    const searchInput = table.querySelector('.guwmi-table-search');
    expect(searchInput).toBeInTheDocument();
  });
})