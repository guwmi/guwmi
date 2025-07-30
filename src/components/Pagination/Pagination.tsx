// import library functionality
import {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

// import components
import SelectInput from '../../components/Inputs/Select/SelectInput';
import Icon from '../../components/Icon/Icon';

// compoent type
export interface PaginationProps {
  currentPage?: number;
  currentSize: number;
  pageSizes: number[];
  totalItems: number;
  className?: string;
  skeleton?: boolean;
  onChange: (value: {currentPage: number, currentSize: number}) => void;
}

/**
 * Pagination component ********************************************************************
 * 
 * @param currentPage - (optional) number value for the current page - defaults to 1
 * @param currentSize - number value for the current page size
 * @param pageSizes - array of number values for the page size select input
 * @param totalItems - number value for the total number of items to paginate
 * @param className - (optional) string value of class names to apply to the component
 * @param skeleton - (optional) boolean value for whether the component should display as a skeleton
 * @param onChange - function to be called on any change event for the component
 * * passes a value parameter of {currentPage: number, currentSize: number}
 * 
 */

export default function Pagination(props: PaginationProps) {

  const {
    currentPage = 1,
    currentSize,
    pageSizes,
    totalItems,
    className,
    skeleton,
    onChange,
    ...rest
  } = props;
  const [page, setPage] = useState<number>(currentPage);
  const [size, setSize] = useState<number>(currentSize);
  const pageRef = useRef<number>(currentPage);
  const sizeRef = useRef<number>(currentSize);
  const classes = `guwmi-pagination${skeleton ? ' guwmi-skeleton' : ''}${className ? ' ' + className : ''}`;
  const numPages = useMemo(() => Math.ceil(totalItems / size), [totalItems, size]);
  const start = useMemo(() => (size * page) - size + 1, [size, page]);
  const end = useMemo(() => (size * page) - size + size, [size, page]);

  const pageSizeArray = useMemo(() => {
    const options = pageSizes.filter((s) => s < totalItems)
      .map((s) => ({ name: s.toString(), value: s.toString() }));
    options.push({name: 'All', value: totalItems.toString()});
    return options;
  }, [pageSizes, totalItems]);

  const pageArray = useMemo(() => {
    return [...Array(Math.ceil(totalItems / size)).keys()].map(i => {
      return {name: (i + 1).toString(), value: (i + 1).toString()}
    })
  }, [totalItems, size]);

  useEffect(() => {
    if (size !== sizeRef.current || page !== pageRef.current) {
      sizeRef.current = size;
      pageRef.current = page;
      onChange({currentPage: page, currentSize: size});
    }
  }, [page, size])

  return (
    <div className={classes} {...rest}>
      <div className="guwmi-pagination-page-size-contaiiner">
        <SelectInput
          label="Items per page:"
          options={pageSizeArray}
          onChange={(e) => {
            setPage(1);
            setSize(Number(e.target.value));
          }}
          disabled={skeleton}
        />
      </div>
      <div className="guwmi-pagination-current-info">
        <p>Showing <span>{`${start}–${end > totalItems ? totalItems : end}`} </span> of <span>{totalItems}</span> items</p>
      </div>
      <div className="guwmi-pagination-navigation">
        <SelectInput
          label={`of ${numPages} pages`}
          options={pageArray}
          onChange={(e) => setPage(Number(e.target.value))}
          value={page.toString()}
          disabled={skeleton}
        />
        <button aria-label="Previous page" onClick={() => setPage(page - 1)} disabled={page === 1 || skeleton}>
          <Icon name="chevron-left" size={20} />
        </button>
        <button aria-label="Next page" onClick={() => setPage(page + 1)} disabled={page === numPages || skeleton}>
          <Icon name="chevron-right" size={20} />
        </button>
      </div>
    </div>
  )
}