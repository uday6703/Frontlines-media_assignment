export interface Company {
  id: string;
  name: string;
  industry: string;
  location: string;
  foundedYear: number;
  employees: number;
  revenue: number; // in lakhs INR
  website: string;
  description: string;
  ceo: string;
  status: 'Active' | 'Inactive' | 'Acquired';
}

export interface CompanyFilters {
  search: string;
  industry: string;
  location: string;
  status: string;
  minEmployees: number;
  maxEmployees: number;
  minRevenue: number;
  maxRevenue: number;
}

export interface SortConfig {
  key: keyof Company;
  direction: 'asc' | 'desc';
}

export const ITEMS_PER_PAGE = 10;