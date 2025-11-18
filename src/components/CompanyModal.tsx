import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Chip,
  Box,
  Divider,
  IconButton,
  Link,
} from '@mui/material';
import {
  Close as CloseIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  LocationOn as LocationIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  CalendarToday as CalendarIcon,
  OpenInNew as OpenInNewIcon,
} from '@mui/icons-material';
import type { Company } from '../types/Company';
import { formatRevenue, formatEmployees } from '../utils/companyUtils';

interface CompanyModalProps {
  company: Company;
  open: boolean;
  onClose: () => void;
}

const CompanyModal: React.FC<CompanyModalProps> = ({ company, open, onClose }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Inactive': return 'error';
      case 'Acquired': return 'warning';
      default: return 'default';
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <BusinessIcon color="primary" />
          <Box>
            <Typography variant="h5" component="div">
              {company.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {company.industry}
            </Typography>
          </Box>
        </Box>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      
      <DialogContent dividers>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          <Box>
            <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
              <Chip
                label={company.status}
                color={getStatusColor(company.status) as any}
                icon={<TrendingUpIcon />}
              />
              <Chip
                label={`Founded ${company.foundedYear}`}
                variant="outlined"
                icon={<CalendarIcon />}
              />
            </Box>
          </Box>

          <Box>
            <Typography variant="body1" paragraph>
              {company.description}
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ flex: '1 1 250px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <PersonIcon color="primary" />
                <Box>
                  <Typography variant="subtitle2">Chief Executive Officer</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {company.ceo}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ flex: '1 1 250px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <LocationIcon color="primary" />
                <Box>
                  <Typography variant="subtitle2">Headquarters</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {company.location}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ flex: '1 1 250px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <PeopleIcon color="primary" />
                <Box>
                  <Typography variant="subtitle2">Employees</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {formatEmployees(company.employees)}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ flex: '1 1 250px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                <TrendingUpIcon color="primary" />
                <Box>
                  <Typography variant="subtitle2">Annual Revenue</Typography>
                  <Typography variant="body1" fontWeight="bold">
                    {formatRevenue(company.revenue)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Divider />

          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <OpenInNewIcon color="primary" />
              <Box>
                <Typography variant="subtitle2">Website</Typography>
                <Link 
                  href={company.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variant="body1"
                  sx={{ fontWeight: 'bold' }}
                >
                  {company.website}
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button 
          variant="outlined" 
          component={Link}
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<OpenInNewIcon />}
        >
          Visit Website
        </Button>
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CompanyModal;