import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Paper,
  Chip,
  Typography,
  IconButton,
  Tooltip,
  Link,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { 
  Visibility as VisibilityIcon,
  OpenInNew as OpenInNewIcon,
  Business as BusinessIcon,
} from '@mui/icons-material';
import type { Company, SortConfig } from '../types/Company';
import { useCompanyContext } from '../context/CompanyContext';
import { formatRevenue, formatEmployees } from '../utils/companyUtils';
import CompanyModal from './CompanyModal';

interface CompanyTableProps {
  companies: Company[];
}

const CompanyTable: React.FC<CompanyTableProps> = ({ companies }) => {
  const { state, dispatch } = useCompanyContext();
  const { sortConfig } = state;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSort = (key: keyof Company) => {
    const direction = sortConfig?.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc';
    const newSortConfig: SortConfig = { key, direction };
    dispatch({ type: 'SET_SORT_CONFIG', payload: newSortConfig });
  };

  const handleViewCompany = (company: Company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  // Helper function for status chip colors
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'error';
      case 'Acquired': return 'warning';
      default: return 'default';
    }
  };

  if (companies.length === 0) {
    return (
      <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
        <BusinessIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 2 }} />
        <Typography variant="h6" color="text.secondary">
          No companies found
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Try adjusting your filters to find more results.
        </Typography>
      </Paper>
    );
  }

  // Mobile card view
  if (isMobile) {
    return (
      <Box>
        {companies.map((company) => (
          <Paper key={company.id} elevation={2} sx={{ mb: 2, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
              <Typography variant="h6" component="div">
                {company.name}
              </Typography>
              <Chip
                label={company.status}
                color={getStatusColor(company.status) as any}
                size="small"
              />
            </Box>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {company.industry} • {company.location}
            </Typography>
            <Typography variant="body2" gutterBottom>
              CEO: {company.ceo}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {formatEmployees(company.employees)} employees • {formatRevenue(company.revenue)} revenue
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
              <Typography variant="caption" color="text.secondary">
                Founded: {company.foundedYear}
              </Typography>
              <Box>
                <IconButton 
                  size="small" 
                  onClick={() => handleViewCompany(company)}
                  sx={{ mr: 1 }}
                >
                  <VisibilityIcon />
                </IconButton>
                <IconButton
                  size="small"
                  component={Link}
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <OpenInNewIcon />
                </IconButton>
              </Box>
            </Box>
          </Paper>
        ))}
        {selectedCompany && (
          <CompanyModal
            company={selectedCompany}
            open={modalOpen}
            onClose={() => {
              setModalOpen(false);
              setSelectedCompany(null);
            }}
          />
        )}
      </Box>
    );
  }

  // Desktop table view
  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={sortConfig?.key === 'name'}
                direction={sortConfig?.key === 'name' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('name')}
              >
                Company Name
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig?.key === 'industry'}
                direction={sortConfig?.key === 'industry' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('industry')}
              >
                Industry
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig?.key === 'location'}
                direction={sortConfig?.key === 'location' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('location')}
              >
                Location
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig?.key === 'employees'}
                direction={sortConfig?.key === 'employees' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('employees')}
              >
                Employees
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortConfig?.key === 'revenue'}
                direction={sortConfig?.key === 'revenue' ? sortConfig.direction : 'asc'}
                onClick={() => handleSort('revenue')}
              >
                Revenue (Crores)
              </TableSortLabel>
            </TableCell>
            <TableCell>Status</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id} hover>
              <TableCell>
                <Typography variant="subtitle2" fontWeight="bold">
                  {company.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  CEO: {company.ceo}
                </Typography>
              </TableCell>
              <TableCell>{company.industry}</TableCell>
              <TableCell>{company.location}</TableCell>
              <TableCell>{formatEmployees(company.employees)}</TableCell>
              <TableCell>{formatRevenue(company.revenue)}</TableCell>
              <TableCell>
                <Chip
                  label={company.status}
                  color={getStatusColor(company.status) as any}
                  size="small"
                />
              </TableCell>
              <TableCell align="center">
                <Tooltip title="View Details">
                  <IconButton 
                    size="small" 
                    onClick={() => handleViewCompany(company)}
                    sx={{ mr: 1 }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Visit Website">
                  <IconButton
                    size="small"
                    component={Link}
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <OpenInNewIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {selectedCompany && (
        <CompanyModal
          company={selectedCompany}
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
            setSelectedCompany(null);
          }}
        />
      )}
    </TableContainer>
  );
};

export default CompanyTable;