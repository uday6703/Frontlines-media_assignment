import { useState, useEffect } from 'react';

export const usePagination = ({ data, currentPage, itemsPerPage }) => {
  const [paginatedData, setPaginatedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginated = data.slice(startIndex, endIndex);
    
    setPaginatedData(paginated);
    setTotalPages(Math.ceil(data.length / itemsPerPage));
  }, [data, currentPage, itemsPerPage]);

  return {
    paginatedData,
    totalPages,
    currentPage,
  };
};