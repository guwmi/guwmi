// import library functionality
import React, { useMemo } from 'react';

// component types
interface ComponentProps {
  headers: { title: string, key: string }[];
  data: { id: number | string, [key: string]: any };
  tableId: string;
}

interface TableCell { id: number | string, col: string, value: any }


export default function TableRow(props: ComponentProps) {

  const { headers, data, tableId } = props;
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
        <tr>
          {cellData.map((cell) => (
            <td key={`table-${tableId}-cell-${cell.id}-${cell.col}`}>{cell.value}</td>
          ))}
        </tr>
      }
    </>
  )
}