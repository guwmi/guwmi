// import library functionality
import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

// import custom functionality
import isEmpty from '../utils/isEmpty';

/**
 * Custom pagniation hook - custom hook to be used with table data and the Carbon pagination component to implement pagination
 * @param sourceData - the data to be pagniated
 * @returns     
 * data: {
      values - array of pagniated data for the table
      pageSize - number indicating the current page size
      currentPage - number indicating the current page
      numItems - number indicating the number of items in the source data
    },
    setPageSize - function to set the page size
    setCurrentPage - funtion to set the current page
    paginate - function to handle the actual pagniation
 */

export default function usePagination(sourceData: any[] = []) {
  const [data, setData] = useState<any[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const numItems = useRef<null | number>(sourceData.length);

  const paginate = useCallback((e: {currentPage: number, currentSize: number}) => {
    setPageSize(e.currentSize);
    setCurrentPage(e.currentPage);
  }, []);

  const start = useMemo(() => (currentPage * pageSize) - pageSize, [pageSize, currentPage]);
  const end = useMemo(() => currentPage * pageSize, [pageSize, currentPage])

  useEffect(() => {
    if (!isEmpty(sourceData)) {
      setData(sourceData.slice(start, end));
    }
  }, [sourceData, pageSize, currentPage])

  useEffect(() => {
    numItems.current = sourceData.length;
  }, [sourceData])

  return { 
    data: {
      values: data,
      pageSize,
      currentPage,
      numItems: numItems.current
    },
    setPageSize,
    setCurrentPage,
    paginate
  }
}