// import library functionality
import { useEffect, useMemo, useState, useRef } from 'react';

// import components
import SelectInput from '../../components/Inputs/Select/SelectInput';
import Icon from '../../components/Icon/Icon';

// compoent type
interface ComponentProps {
  currentPage?: number;
  currentSize: number;
  pageSizes: number[];
  totalItems: number;
  onChange: (value: {currentPage: number, currentSize: number}) => void;
  className?: string;
}

export default function Pagination(props: ComponentProps) {

  const {
    currentPage = 1,
    currentSize,
    pageSizes,
    totalItems,
    className,
    onChange,
    ...rest
  } = props;
  const classes = useMemo(() => `guwmi-pagination${className ? ' ' + className : ''}`, [className]);
  const options = useMemo(() => {
    return pageSizes.map((size) => ({name: size.toString(), value: size.toString()}));
  }, [pageSizes]);
  const [page, setPage] = useState<number>(currentPage);
  const [size, setSize] = useState<number>(currentSize);
  const pageRef = useRef<number>(currentPage);
  const sizeRef = useRef<number>(currentSize);
  const numPages = useMemo(() => Math.ceil(totalItems / size), [totalItems, size]);
  const pageArray = useMemo(() => {
    return [...Array(Math.floor(totalItems / size)).keys()].map(i => {
      return {name: (i + 1).toString(), value: (i + 1).toString()}
    })
  }, [totalItems, size]);
  const curRange = useMemo(() => {
    const start = (size * page) - size + 1;
    const end = start + size - 1;
    return `${start}–${end}`
  }, [size, page])

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
        <SelectInput label="Items per page:" options={options} onChange={(e) => setSize(Number(e.target.value))} />
      </div>
      <div className="guwmi-pagination-current-info">
        <p>Showing <span>{curRange} </span> of <span>{totalItems}</span> items</p>
      </div>
      <div className="guwmi-pagination-navigation">
        <SelectInput
          label={`of ${numPages} pages`}
          options={pageArray}
          onChange={(e) => setPage(Number(e.target.value))}
          value={page.toString()}
        />
        <button aria-label="Previous page" onClick={() => setPage(page - 1)} disabled={page === 1}>
          <Icon name="chevron-left" size={20} />
        </button>
        <button aria-label="Next page" onClick={() => setPage(page + 1)} disabled={page === numPages}>
          <Icon name="chevron-right" size={20} />
        </button>
      </div>
    </div>
  )
}