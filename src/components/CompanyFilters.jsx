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

const CompanyFilters = () => {
  const { state, dispatch } = useCompanyContext();
  const { companies, filters } = state;

  const industries = getUniqueValues(companies, 'industry');
  const locations = getUniqueValues(companies, 'location').map(loc => {
    return loc.split(',').pop()?.trim() || loc;
  });
  const uniqueLocations = [...new Set(locations)];

  const statuses = ['Active', 'Inactive', 'Acquired'];

  const handleFilterChange = (filterName, value) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: { [filterName]: value },
    });
  };

  const handleRangeChange = (filterName, values) => {
    dispatch({
      type: 'SET_FILTERS',
      payload: {
        [`min${filterName}`]: values[0],
        [`max${filterName}`]: values[1],
      },
    });
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Filter Companies
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          placeholder="Search by name, CEO, or description..."
          sx={{ minWidth: 250 }}
        />

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Industry</InputLabel>
          <Select
            value={filters.industry}
            label="Industry"
            onChange={(e) => handleFilterChange('industry', e.target.value)}
          >
            <MenuItem value="">All Industries</MenuItem>
            {industries.map(industry => (
              <MenuItem key={industry} value={industry}>{industry}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={filters.location}
            label="Location"
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <MenuItem value="">All Locations</MenuItem>
            {uniqueLocations.map(location => (
              <MenuItem key={location} value={location}>{location}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 120 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status}
            label="Status"
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            <MenuItem value="">All Status</MenuItem>
            {statuses.map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button 
          variant="outlined" 
          onClick={handleReset}
          sx={{ minWidth: 100 }}
        >
          Reset
        </Button>
      </Box>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        <Box sx={{ minWidth: 250 }}>
          <Typography gutterBottom>
            Employees: {filters.minEmployees} - {filters.maxEmployees || '10000+'}
          </Typography>
          <Slider
            value={[filters.minEmployees, filters.maxEmployees || 5000]}
            onChange={(e, values) => handleRangeChange('Employees', values)}
            valueLabelDisplay="auto"
            min={0}
            max={5000}
            step={50}
          />
        </Box>

        <Box sx={{ minWidth: 250 }}>
          <Typography gutterBottom>
            Revenue (₹ Cr): {filters.minRevenue} - {filters.maxRevenue || '50000+'}
          </Typography>
          <Slider
            value={[filters.minRevenue, filters.maxRevenue || 50000]}
            onChange={(e, values) => handleRangeChange('Revenue', values)}
            valueLabelDisplay="auto"
            min={0}
            max={50000}
            step={100}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default CompanyFilters;