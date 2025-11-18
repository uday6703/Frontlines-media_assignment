import React from 'react';
import {
  Paper,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Box,
  Slider,
} from '@mui/material';
import { useCompanyContext } from '../context/CompanyContext';
import { getUniqueValues } from '../utils/companyUtils';

const CompanyFilters: React.FC = () => {
  const { state, dispatch } = useCompanyContext();
  const { companies, filters } = state;

  const industries = getUniqueValues(companies, 'industry');
  const locations = getUniqueValues(companies, 'location').map(loc => {
    // Extract city, state from full location string
    // e.g., "San Francisco, CA" -> "CA"
    return loc.split(',').pop()?.trim() || loc;
  });
  const uniqueLocations = [...new Set(locations)];

  const statuses = ['Active', 'Inactive', 'Acquired']; // Fixed list of possible statuses

  const handleFilterChange = (filterName: string, value: any) => {
    // Update filters and reset to first page
    dispatch({
      type: 'SET_FILTERS',
      payload: { [filterName]: value },
    });
  };

  const handleRangeChange = (filterName: string, values: number[]) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        [`min${filterName}`]: values[0],
        [`max${filterName}`]: values[1],
      },
    });
  };

  const handleResetFilters = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  const maxEmployees = Math.max(...companies.map(c => c.employees));
  const maxRevenue = Math.max(...companies.map(c => c.revenue));

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Filter Companies
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
            <TextField
              fullWidth
              label="Search Companies"
              placeholder="Search by name, description, or CEO..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              variant="outlined"
            />
          </Box>
          
          <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
            <FormControl fullWidth>
              <InputLabel>Industry</InputLabel>
              <Select
                value={filters.industry}
                label="Industry"
                onChange={(e) => handleFilterChange('industry', e.target.value)}
              >
                <MenuItem value="">All Industries</MenuItem>
                {industries.map((industry) => (
                  <MenuItem key={industry} value={industry}>
                    {industry}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
            <FormControl fullWidth>
              <InputLabel>Location</InputLabel>
              <Select
                value={filters.location}
                label="Location"
                onChange={(e) => handleFilterChange('location', e.target.value)}
              >
                <MenuItem value="">All Locations</MenuItem>
                {uniqueLocations.map((location) => (
                  <MenuItem key={location} value={location}>
                    {location}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <Box sx={{ flex: '1 1 200px', minWidth: '200px' }}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                value={filters.status}
                label="Status"
                onChange={(e) => handleFilterChange('status', e.target.value)}
              >
                <MenuItem value="">All Statuses</MenuItem>
                {statuses.map((status) => (
                  <MenuItem key={status} value={status}>
                    {status}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
          <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
            <Typography gutterBottom>
              Employee Count: {filters.minEmployees.toLocaleString()} - {filters.maxEmployees || maxEmployees.toLocaleString()}
            </Typography>
            <Slider
              value={[filters.minEmployees, filters.maxEmployees || maxEmployees]}
              onChange={(_, values) => handleRangeChange('Employees', values as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={maxEmployees}
              step={100}
              valueLabelFormat={(value) => value.toLocaleString()}
            />
          </Box>

          <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
            <Typography gutterBottom>
              Revenue (Cr): ₹{(filters.minRevenue / 100).toFixed(2)}Cr - ₹{((filters.maxRevenue || maxRevenue) / 100).toFixed(2)}Cr
            </Typography>
            <Slider
              value={[filters.minRevenue, filters.maxRevenue || maxRevenue]}
              onChange={(_, values) => handleRangeChange('Revenue', values as number[])}
              valueLabelDisplay="auto"
              min={0}
              max={maxRevenue}
              step={100}
              valueLabelFormat={(value) => `₹${(value / 100).toFixed(2)}Cr`}
            />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="outlined" onClick={handleResetFilters}>
            Reset Filters
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default CompanyFilters;