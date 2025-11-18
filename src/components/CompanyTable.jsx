import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Chip,
  IconButton,
  Box,
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Typography,
  Avatar,
} from '@mui/material';
import { Info as InfoIcon, Business as BusinessIcon } from '@mui/icons-material';
import { useCompanyContext } from '../context/CompanyContext';
import { formatRevenue } from '../utils/companyUtils';
import CompanyModal from './CompanyModal';
import Pagination from './Pagination';

const CompanyTable = ({ 
  companies, 
  currentPage, 
  totalPages, 
  itemsPerPage, 
  onPageChange, 
  onItemsPerPageChange 
}) => {
  const { state, dispatch } = useCompanyContext();
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sortField, setSortField] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSort = (field) => {
    const newDirection = sortField === field && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortDirection(newDirection);
    
    dispatch({
      type: 'SET_SORT_CONFIG',
      payload: { key: field, direction: newDirection },
    });
  };

  const handleCompanyClick = (company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
    setModalOpen(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'error';
      case 'Acquired': return 'warning';
      default: return 'default';
    }
  };

  if (isMobile) {
    return (
      <Box>
        <Box sx={{ display: 'grid', gap: 2, mb: 3 }}>
          {companies.map((company) => (
            <Card key={company.id} sx={{ cursor: 'pointer' }} onClick={() => handleCompanyClick(company)}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
                    <BusinessIcon />
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" component="h3">
                      {company.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {company.industry} • {company.location}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                      <Chip 
                        label={company.status} 
                        size="small" 
                        color={getStatusColor(company.status)}
                      />
                      <Typography variant="body2">
                        {formatRevenue(company.revenue)}
                      </Typography>
                    </Box>
                  </Box>
                  <IconButton>
                    <InfoIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          totalItems={state.filteredCompanies.length}
          onPageChange={onPageChange}
          onItemsPerPageChange={onItemsPerPageChange}
        />
        <CompanyModal
          company={selectedCompany}
          open={modalOpen}
          onClose={handleCloseModal}
        />
      </Box>
    );
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 600 }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'name'}
                  direction={sortField === 'name' ? sortDirection : 'asc'}
                  onClick={() => handleSort('name')}
                >
                  Company
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'industry'}
                  direction={sortField === 'industry' ? sortDirection : 'asc'}
                  onClick={() => handleSort('industry')}
                >
                  Industry
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'location'}
                  direction={sortField === 'location' ? sortDirection : 'asc'}
                  onClick={() => handleSort('location')}
                >
                  Location
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'employees'}
                  direction={sortField === 'employees' ? sortDirection : 'asc'}
                  onClick={() => handleSort('employees')}
                >
                  Employees
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sortField === 'revenue'}
                  direction={sortField === 'revenue' ? sortDirection : 'asc'}
                  onClick={() => handleSort('revenue')}
                >
                  Revenue
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
                  <Box>
                    <Typography variant="subtitle2">{company.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {company.ceo}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{company.industry}</TableCell>
                <TableCell>{company.location}</TableCell>
                <TableCell>{company.employees.toLocaleString()}</TableCell>
                <TableCell>{formatRevenue(company.revenue)}</TableCell>
                <TableCell>
                  <Chip 
                    label={company.status} 
                    size="small" 
                    color={getStatusColor(company.status)}
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton 
                    onClick={() => handleCompanyClick(company)}
                    size="small"
                  >
                    <InfoIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        totalItems={state.filteredCompanies.length}
        onPageChange={onPageChange}
        onItemsPerPageChange={onItemsPerPageChange}
      />

      <CompanyModal
        company={selectedCompany}
        open={modalOpen}
        onClose={handleCloseModal}
      />
    </Paper>
  );
};

export default CompanyTable;