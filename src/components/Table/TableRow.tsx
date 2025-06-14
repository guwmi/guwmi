// import library functionality
import { useMemo } from 'react';

// import types
import { TableRow as TableRowShape, TableHeader } from './Table';

// component types
export interface TableRowProps {
  headers: TableHeader[];
  data: TableRowShape;
  tableId: string;
}

export interface TableCell {
  id: number | string,
  col: string,
  value: any
}

/**
 * Table Row component **********************************************************************
 * 
 * @param headers - array of header objects { title: string, key: string } used to determine data to display;
 * @param data - row data { id: number | string, [key: string]: any } that is split into cells using the headers array
 * @param tableId - string value used for unique keys when mapping
 * 
 */

export default function TableRow(props: TableRowProps) {

  const {
    headers,
    data,
    tableId,
    ...rest
  } = props;

  const cellData = useMemo(() => {
    const arr: TableCell[] = [];
    headers.forEach((h) => {
      if (data[h.key]) {
        arr.push({ id: data.id, col: h.key, value: data[h.key] })
      }
    })
    return arr;
  }, [headers, data]);

  return (
    <>
      {cellData &&
        <tr {...rest}>
          {cellData.map((cell) => (
            <td key={`table-${tableId}-cell-${cell.id}-${cell.col}`}>{cell.value}</td>
          ))}
        </tr>
      }
    </>
  )
}