import type { Company, CompanyFilters, SortConfig } from '../types/Company';

export const filterCompanies = (companies: Company[], filters: CompanyFilters): Company[] => {
  return companies.filter(company => {
    const matchesSearch = !filters.search || 
      company.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      company.description.toLowerCase().includes(filters.search.toLowerCase()) ||
      company.ceo.toLowerCase().includes(filters.search.toLowerCase());

    const matchesIndustry = !filters.industry || company.industry === filters.industry;
    const matchesLocation = !filters.location || company.location.includes(filters.location);
    const matchesStatus = !filters.status || company.status === filters.status;
    
    const matchesEmployeeRange = company.employees >= filters.minEmployees && 
      (filters.maxEmployees === 0 || company.employees <= filters.maxEmployees);
    
    const matchesRevenueRange = company.revenue >= filters.minRevenue && 
      (filters.maxRevenue === 0 || company.revenue <= filters.maxRevenue);

    return matchesSearch && matchesIndustry && matchesLocation && 
           matchesStatus && matchesEmployeeRange && matchesRevenueRange;
  });
};

export const sortCompanies = (companies: Company[], sortConfig: SortConfig | null): Company[] => {
  if (!sortConfig) return companies;

  return [...companies].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (aValue === bValue) return 0;

    const comparison = aValue < bValue ? -1 : 1;
    return sortConfig.direction === 'asc' ? comparison : -comparison;
  });
};

export const paginateCompanies = (companies: Company[], page: number, itemsPerPage: number): Company[] => {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return companies.slice(startIndex, endIndex);
};

export const getUniqueValues = (companies: Company[], key: keyof Company): string[] => {
  const values = companies.map(company => String(company[key]));
  return [...new Set(values)].filter(Boolean).sort();
};

export const formatRevenue = (revenue: number): string => {
  return `₹${(revenue / 100).toFixed(2)} Cr`;
};

export const formatEmployees = (employees: number): string => {
  return employees.toLocaleString();
};