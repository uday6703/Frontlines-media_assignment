export const filterCompanies = (companies, filters) => {
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

export const sortCompanies = (companies, sortConfig) => {
  if (!sortConfig) return companies;

  return [...companies].sort((a, b) => {
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return sortConfig.direction === 'asc' 
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }

    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return sortConfig.direction === 'asc' 
        ? aValue - bValue
        : bValue - aValue;
    }

    return 0;
  });
};

export const paginateCompanies = (companies, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return companies.slice(startIndex, endIndex);
};

export const getUniqueValues = (companies, key) => {
  return [...new Set(companies.map(company => company[key]))];
};

export const formatRevenue = (revenue) => {
  return `₹${revenue.toFixed(1)} Cr`;
};