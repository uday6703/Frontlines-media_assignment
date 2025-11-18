import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Chip,
  Divider,
  Link,
} from '@mui/material';
import {
  Business as BusinessIcon,
  LocationOn as LocationIcon,
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  Web as WebIcon,
  CalendarToday as CalendarIcon,
} from '@mui/icons-material';
import { formatRevenue } from '../utils/companyUtils';

const CompanyModal = ({ company, open, onClose }) => {
  if (!company) return null;

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'error';
      case 'Acquired': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <BusinessIcon color="primary" />
          <Box>
            <Typography variant="h6">{company.name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {company.industry}
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Typography variant="h6" gutterBottom>
              Company Overview
            </Typography>
            <Typography variant="body1" paragraph>
              {company.description}
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PeopleIcon color="action" />
              <Typography variant="body2">
                CEO: <strong>{company.ceo}</strong>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationIcon color="action" />
              <Typography variant="body2">
                Location: <strong>{company.location}</strong>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CalendarIcon color="action" />
              <Typography variant="body2">
                Founded: <strong>{company.foundedYear}</strong>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <PeopleIcon color="action" />
              <Typography variant="body2">
                Employees: <strong>{company.employees.toLocaleString()}</strong>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <MoneyIcon color="action" />
              <Typography variant="body2">
                Revenue: <strong>{formatRevenue(company.revenue)}</strong>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <WebIcon color="action" />
              <Typography variant="body2">
                Website: <Link href={company.website} target="_blank" rel="noopener">
                  {company.website}
                </Link>
              </Typography>
            </Box>
          </Box>

          <Divider />

          <Box>
            <Typography variant="body2" gutterBottom>
              Status:
            </Typography>
            <Chip 
              label={company.status} 
              color={getStatusColor(company.status)}
              sx={{ fontWeight: 'bold' }}
            />
          </Box>
        </Box>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompanyModal;