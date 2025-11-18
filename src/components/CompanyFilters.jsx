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
    <Paper sx={{ p: 3, mb: 3, width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Filter Companies
      </Typography>
      
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { 
          xs: '1fr', 
          sm: '1fr 1fr', 
          md: '2fr 1fr 1fr 1fr auto' 
        }, 
        gap: 2, 
        mb: 3,
        alignItems: 'center',
        width: '100%'
      }}>
        <TextField
          label="Search"
          variant="outlined"
          size="small"
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          placeholder="Search by name, CEO, or description..."
          fullWidth
        />

        <FormControl size="small" fullWidth>
          <InputLabel>Industry</InputLabel>
          <Select
            value={filters.industry}
            label="Industry"
            onChange={(e) => handleFilterChange('industry', e.target.value)}
            fullWidth
          >
            <MenuItem value="">All Industries</MenuItem>
            {industries.map(industry => (
              <MenuItem key={industry} value={industry}>{industry}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" fullWidth>
          <InputLabel>Location</InputLabel>
          <Select
            value={filters.location}
            label="Location"
            onChange={(e) => handleFilterChange('location', e.target.value)}
            fullWidth
          >
            <MenuItem value="">All Locations</MenuItem>
            {uniqueLocations.map(location => (
              <MenuItem key={location} value={location}>{location}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl size="small" fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status}
            label="Status"
            onChange={(e) => handleFilterChange('status', e.target.value)}
            fullWidth
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
          sx={{ 
            minWidth: { xs: '100%', md: 100 },
            gridColumn: { xs: '1', md: 'auto' }
          }}
        >
          Reset
        </Button>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { 
          xs: '1fr', 
          md: '1fr 1fr' 
        }, 
        gap: 4,
        width: '100%'
      }}>
        <Box sx={{ width: '100%' }}>
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
            sx={{ width: '100%' }}
          />
        </Box>

        <Box sx={{ width: '100%' }}>
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
            sx={{ width: '100%' }}
          />
        </Box>
      </Box>
    </Paper>
  );
};

export default CompanyFilters;