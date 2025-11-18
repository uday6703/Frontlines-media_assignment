import React from 'react';
import {
  Container,
  Typography,
  Box,
  AppBar,
  Toolbar,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import CompanyFilters from './components/CompanyFilters';
import CompanyTable from './components/CompanyTable';
import LoadingState from './components/LoadingState';
import { CompanyProvider } from './context/CompanyContext';
import { useCompanies } from './hooks/useCompanies';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    h4: {
      fontWeight: 'bold',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: '12px',
        },
      },
    },
  },
});

const CompanyDashboard = () => {
  const {
    companies,
    totalCompanies,
    currentPage,
    totalPages,
    itemsPerPage,
    isLoading,
    error,
    handlePageChange,
    handleItemsPerPageChange,
  } = useCompanies();

  if (isLoading) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <LoadingState />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography color="error" variant="h6" align="center">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Company Directory
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
          Discover and explore companies across various industries
        </Typography>
        
        <Card sx={{ mb: 3 }}>
          <CardContent>
            <CompanyFilters />
          </CardContent>
        </Card>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" color="text.secondary">
            Found {totalCompanies} companies
          </Typography>
        </Box>

        <CompanyTable
          companies={companies}
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </Box>
    </Container>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CompanyProvider>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" elevation={2}>
            <Toolbar>
              <BusinessIcon sx={{ mr: 2 }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Company Management System
              </Typography>
            </Toolbar>
          </AppBar>
          <CompanyDashboard />
        </Box>
      </CompanyProvider>
    </ThemeProvider>
  );
};

export default App;