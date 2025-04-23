// import library functionality
import React, { useId, useMemo } from 'react';

// import components
import TableRow from './TableRow';

// component type
interface ComponentProps {
  headers: { title: string, key: string }[];
  rows: { id: number | string, [key: string]: any }[];
  isCondensed?: boolean;
}

export default function Table(props: ComponentProps) {

  const { headers, rows, isCondensed } = props;
  const id = useId();
  const classes = useMemo(() => `guwmi-table-container${isCondensed ? ' condensed' : ''}`, [])

  return (
    <div className={classes}>
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
              {rows.length > 0 ? rows.map((row) => (
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