import React, { createContext, useContext, useReducer } from 'react';

const CompanyContext = createContext();

const initialState = {
  companies: [],
  filteredCompanies: [],
  filters: {
    search: '',
    industry: '',
    location: '',
    status: '',
    minEmployees: 0,
    maxEmployees: 0,
    minRevenue: 0,
    maxRevenue: 0,
  },
  sortConfig: null,
  currentPage: 1,
  loading: false,
  error: null,
};

const companyReducer = (state, action) => {
  switch (action.type) {
    case 'SET_COMPANIES':
      return {
        ...state,
        companies: action.payload,
      };
    case 'SET_FILTERED_COMPANIES':
      return {
        ...state,
        filteredCompanies: action.payload,
        currentPage: 1,
      };
    case 'SET_FILTERS':
      return {
        ...state,
        filters: {
          ...state.filters,
          ...action.payload,
        },
      };
    case 'RESET_FILTERS':
      return {
        ...state,
        filters: initialState.filters,
      };
    case 'SET_SORT_CONFIG':
      return {
        ...state,
        sortConfig: action.payload,
      };
    case 'SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const CompanyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(companyReducer, initialState);

  return (
    <CompanyContext.Provider value={{ state, dispatch }}>
      {children}
    </CompanyContext.Provider>
  );
};

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
};