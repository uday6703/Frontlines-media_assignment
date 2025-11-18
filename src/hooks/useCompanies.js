import { useState, useEffect } from 'react';
import { useCompanyContext } from '../context/CompanyContext';
import { mockCompanies } from '../data/mockCompanies';
import { filterCompanies, sortCompanies, paginateCompanies } from '../utils/companyUtils';
import { usePagination } from './usePagination';

export const useCompanies = () => {
  const { state, dispatch } = useCompanyContext();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const loadCompanies = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
      
      try {
        const companies = await fetchCompanies();
        dispatch({ type: 'SET_COMPANIES', payload: companies });
      } catch (error) {
        console.error('Failed to load companies:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load companies' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadCompanies();
  }, [dispatch]);

  useEffect(() => {
    const filtered = filterCompanies(state.companies, state.filters);
    const sorted = sortCompanies(filtered, state.sortConfig);
    dispatch({ type: 'SET_FILTERED_COMPANIES', payload: sorted });
  }, [state.companies, state.filters, state.sortConfig, dispatch]);

  const paginatedCompanies = paginateCompanies(
    state.filteredCompanies,
    state.currentPage,
    itemsPerPage
  );

  const { paginatedData, totalPages, currentPage: paginationPage } = usePagination({
    data: state.filteredCompanies,
    currentPage: state.currentPage,
    itemsPerPage,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const handleItemsPerPageChange = (newItemsPerPage) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
  };

  return {
    companies: paginatedData,
    allCompanies: state.companies,
    filteredCompanies: state.filteredCompanies,
    totalCompanies: state.filteredCompanies.length,
    currentPage: state.currentPage,
    totalPages,
    itemsPerPage,
    isLoading: state.loading,
    error: state.error,
    handlePageChange,
    handleItemsPerPageChange,
  };
};

const fetchCompanies = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCompanies;
};