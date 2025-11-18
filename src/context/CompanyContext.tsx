import React, { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { Company, CompanyFilters, SortConfig } from '../types/Company';

interface CompanyState {
  companies: Company[];
  filteredCompanies: Company[];
  filters: CompanyFilters;
  sortConfig: SortConfig | null;
  currentPage: number;
  loading: boolean;
  error: string | null;
}

type CompanyAction =
  | { type: 'SET_COMPANIES'; payload: Company[] }
  | { type: 'SET_FILTERED_COMPANIES'; payload: Company[] }
  | { type: 'SET_FILTERS'; payload: Partial<CompanyFilters> }
  | { type: 'SET_SORT_CONFIG'; payload: SortConfig | null }
  | { type: 'SET_CURRENT_PAGE'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'RESET_FILTERS' };

const initialFilters: CompanyFilters = {
  search: '',
  industry: '',
  location: '',
  status: '',
  minEmployees: 0,
  maxEmployees: 0,
  minRevenue: 0,
  maxRevenue: 0,
};

const initialState: CompanyState = {
  companies: [],
  filteredCompanies: [],
  filters: initialFilters,
  sortConfig: null,
  currentPage: 1,
  loading: false,
  error: null,
};

const companyReducer = (state: CompanyState, action: CompanyAction): CompanyState => {
  switch (action.type) {
    case 'SET_COMPANIES':
      return { ...state, companies: action.payload };
    case 'SET_FILTERED_COMPANIES':
      return { ...state, filteredCompanies: action.payload };
    case 'SET_FILTERS':
      return { 
        ...state, 
        filters: { ...state.filters, ...action.payload },
        currentPage: 1 // Reset to first page when filters change
      };
    case 'SET_SORT_CONFIG':
      return { ...state, sortConfig: action.payload };
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'RESET_FILTERS':
      return { 
        ...state, 
        filters: initialFilters, 
        currentPage: 1,
        sortConfig: null 
      };
    default:
      return state;
  }
};

interface CompanyContextType {
  state: CompanyState;
  dispatch: React.Dispatch<CompanyAction>;
}

const CompanyContext = createContext<CompanyContextType | undefined>(undefined);

export const useCompanyContext = () => {
  const context = useContext(CompanyContext);
  if (!context) {
    throw new Error('useCompanyContext must be used within a CompanyProvider');
  }
  return context;
};

interface CompanyProviderProps {
  children: ReactNode;
}

export const CompanyProvider: React.FC<CompanyProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(companyReducer, initialState);

  return (
    <CompanyContext.Provider value={{ state, dispatch }}>
      {children}
    </CompanyContext.Provider>
  );
};