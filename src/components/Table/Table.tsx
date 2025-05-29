// import library functionality
import React, { useEffect, useId, useMemo, useState } from 'react';

// import custom functionality
import tableSearch from '../../utils/tableSearch';

// import components
import TableRow from './TableRow';
import SearchInput from '../Inputs/Search/SearchInput';

// component type
interface ComponentProps {
  headers: { title: string, key: string, search: 'includes' | 'starts-with' | undefined }[];
  rows: { id: number | string, [key: string]: any }[];
  isCondensed?: boolean;
}

export default function Table(props: ComponentProps) {

  const { headers, rows, isCondensed, ...rest } = props;
  const id = useId();
  const isSearchable = useMemo(() => headers.some((header) => (header?.search === 'includes' || header?.search === 'starts-with')), [headers])
  const classes = useMemo(() => `guwmi-table-container${isCondensed ? ' condensed' : ''}`, [])
  const searchHeaders = useMemo(() => headers.filter((header) => (header?.search === 'includes' || header?.search === 'starts-with')), [headers]);
  const [searchValue, setSearchValue] = useState<string>('');
  const [tableRows, setTableRows] = useState<{ id: number | string, [key: string]: any }[]>(rows);

  const handleSearch = () => {
    const updatedRows = tableSearch(
      rows,
      searchHeaders,
      searchValue
    )
    setTableRows(updatedRows);
  }

  useEffect(() => {
    handleSearch();
  }, [searchValue])

  return (
    <div className={classes} {...rest}>
      {(headers.length > 0 && isSearchable) &&
        <div className="guwmi-table-search">
          <SearchInput onChange={(e) => setSearchValue(e.target.value)} />
        </div>
      }
      <table cellPadding={0} cellSpacing={0}>
        {headers.length > 0 ? (
          <>
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th key={`table-${id}-header-${i}`}>{header.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.length > 0 ? tableRows.map((row) => (
                <TableRow key={`table-${id}-row-${row.id}`} headers={headers} data={row} tableId={id} />
              )) : (
                <tr>
                  <td colSpan={headers.length}>There is no data to display in the table</td>
                </tr>
              )}
            </tbody>
          </>
        ) : (
          <tbody>
            <tr>
              <td>No column headers provided for the table</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  )
}