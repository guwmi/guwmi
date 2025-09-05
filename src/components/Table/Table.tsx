// import library functionality
import {
  useEffect,
  useId,
  useMemo,
  useState
} from 'react';

// import custom functionality
import tableSearch from '../../utils/tableSearch';
import usePagination from '../../hooks/usePagination';

// import components
import TableRow from './TableRow';
import SearchInput from '../Inputs/Search/SearchInput';
import Pagination from '../../components/Pagination/Pagination';

// component types
export interface TableHeader {
  title: string,
  key: string,
  search?: 'includes' | 'starts-with'
}

export interface TableRow {
  id: number | string,
  [key: string]: any
}

export interface TableProps {
  title?: string;
  description?: string;
  headers: TableHeader[];
  rows: TableRow[];
  isCondensed?: boolean;
  hasPagination?: boolean;
  className?: string;
  skeleton?: boolean;
}

/**
 * Table component ***************************************************************************
 * 
 * @param title - (optional) string value for the table title
 * @param description - (optional) string value for the table description
 * @param headers - array of header objects
 *  - title: string
 *  - key: string 
 *  - search?: 'includes' | 'starts-with'
 * @param rows - array of row objects
 *  - id: number | string
 *  - [key: string]: any
 * @param isCondensed - (optional) boolean value for displaying the table with condensed row height
 * @param hasPagination - (optional) boolean value for whether the table should include pagination
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean vaule for whether the component should display as a skeleton
 * 
 */

export default function Table(props: TableProps) {

  const {
    title,
    description,
    headers,
    rows,
    isCondensed,
    hasPagination = false,
    className,
    skeleton,
    ...rest
  } = props;
  const id = useId();
  const isSearchable = useMemo(() => headers.some((header) => (header?.search === 'includes' || header?.search === 'starts-with')), [headers]);
  const searchHeaders = useMemo(() => headers.filter((header) => (header?.search === 'includes' || header?.search === 'starts-with')), [headers]);
  const classes = `guwmi-table-container${isCondensed ? ' condensed' : ''}${className ? ' ' + className : ''}`;
  const [searchValue, setSearchValue] = useState<string>('');
  const [tableRows, setTableRows] = useState<{ id: number | string, [key: string]: any }[]>(rows);
  const { data: paginatedData, paginate } = usePagination(tableRows);
  const rowsToRender = hasPagination ? paginatedData.values : tableRows;

  const handleSearch = () => {
    const updatedRows = tableSearch(
      rows,
      searchHeaders,
      searchValue
    )
    setTableRows(updatedRows);
  }

  useEffect(() => {
    if (isSearchable) {
      handleSearch();
    }
  }, [searchValue])

  return (
    <div className={classes} {...rest}>
      {(title || description) &&
        <div className="guwmi-table-header">
          {title &&
            <h2 className={skeleton ? 'guwmi-skeleton' : null}>{title}</h2>
          }
          {description &&
            <p className={skeleton ? 'guwmi-skeleton' : null}>{description}</p>
          }
        </div>
      }
      {(headers.length > 0 && isSearchable) &&
        <div className="guwmi-table-search">
          <SearchInput onChange={(e) => setSearchValue(e.target.value)} skeleton={skeleton} />
        </div>
      }
      <div className="guwmi-table-content">
        <table cellPadding={0} cellSpacing={0} tabIndex={-1}>
          {skeleton ? (
            <>
              <thead>
                <tr>
                  {Array.from({ length: 4 }, (_, index) => index).map((v, i) => (
                    <th key={`guwmi-table-skelton-header-${i}`} className="guwmi-skeleton"></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }, (_, index) => index).map((v, i) => (
                  <tr key={`guwmi-table-skelton-row-${i}`}>
                    {Array.from({ length: 4 }, (_, index) => index).map((v, i) => (
                      <td key={`guwmi-table-skelton-td-${i}`} className="guwmi-skeleton"></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </>
          ) : (
            headers.length > 0 ? (
              <>
                <thead>
                  <tr>
                    {headers.map((header, i) => (
                      <th key={`table-${id}-header-${i}`}>{header.title}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rowsToRender.length > 0 ?
                    rowsToRender.map((row) => <TableRow key={`table-${id}-row-${row.id}`} headers={headers} data={row} tableId={id} />
                  ) : (
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
            )
          )}
        </table>
      </div>
      {hasPagination &&
        <Pagination
          totalItems={tableRows.length}
          pageSizes={[5,10,20,50]}
          currentPage={paginatedData.currentPage}
          currentSize={paginatedData.pageSize}
          onChange={paginate}
          skeleton={skeleton}
        />
      }
    </div>
  )
}