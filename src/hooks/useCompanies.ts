import { useEffect, useState } from 'react';
import { useCompanyContext } from '../context/CompanyContext';
import { fetchCompanies } from '../data/mockCompanies';
import { filterCompanies, sortCompanies, paginateCompanies } from '../utils/companyUtils';

export const useCompanies = () => {
  const { state, dispatch } = useCompanyContext();
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Fetch companies on mount
  useEffect(() => {
    const loadCompanies = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      dispatch({ type: 'SET_ERROR', payload: null });
      
      try {
        // Simulating API call with mock data
        // TODO: Replace with actual API endpoint
        const companies = await fetchCompanies();
        dispatch({ type: 'SET_COMPANIES', payload: companies });
      } catch (error) {
        console.error('Failed to load companies:', error); // Debug logging
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load companies' });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    loadCompanies();
  }, [dispatch]);

  // Apply filters and sorting whenever companies, filters, or sortConfig change
  useEffect(() => {
    const filtered = filterCompanies(state.companies, state.filters);
    const sorted = sortCompanies(filtered, state.sortConfig);
    dispatch({ type: 'SET_FILTERED_COMPANIES', payload: sorted });
  }, [state.companies, state.filters, state.sortConfig, dispatch]);

  // Get paginated companies
  const paginatedCompanies = paginateCompanies(
    state.filteredCompanies,
    state.currentPage,
    itemsPerPage
  );

  const totalPages = Math.ceil(state.filteredCompanies.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    dispatch({ type: 'SET_CURRENT_PAGE', payload: page });
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    dispatch({ type: 'SET_CURRENT_PAGE', payload: 1 });
  };

  return {
    companies: paginatedCompanies,
    totalCompanies: state.filteredCompanies.length,
    currentPage: state.currentPage,
    totalPages,
    itemsPerPage,
    loading: state.loading,
    error: state.error,
    handlePageChange,
    handleItemsPerPageChange,
  };
};

export const useCompanyFilters = () => {
  const { state, dispatch } = useCompanyContext();

  const updateFilter = (filterName: string, value: any) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: { [filterName]: value },
    });
  };

  const resetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  return {
    filters: state.filters,
    updateFilter,
    resetFilters,
  };
};