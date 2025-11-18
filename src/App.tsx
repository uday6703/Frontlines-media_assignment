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
  Paper,
  Alert,
} from '@mui/material';
import { Business as BusinessIcon } from '@mui/icons-material';
import { CompanyProvider } from './context/CompanyContext';
import CompanyFilters from './components/CompanyFilters';
import CompanyTable from './components/CompanyTable';
import Pagination from './components/Pagination';
import LoadingState from './components/LoadingState';
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
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    // Custom styling for consistency
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
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
  },
});

const CompanyDashboard: React.FC = () => {
  const {
    companies,
    totalCompanies,
    currentPage,
    itemsPerPage,
    loading,
    error,
    handlePageChange,
    handleItemsPerPageChange,
  } = useCompanies();

  // Show loading skeleton while fetching data
  if (loading) {
    return <LoadingState type="initial" />;
  }

  return (
    <Box sx={{ pb: 4 }}>
      {/* Display any errors if they occur */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}
      
      <CompanyFilters />
      
      {/* Summary card showing total results */}
      <Paper elevation={1} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Company Directory
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {totalCompanies.toLocaleString()} companies found
        </Typography>
      </Paper>
      
      <CompanyTable companies={companies} />
      
      {/* Pagination at bottom */}
      <Pagination
        currentPage={currentPage}
        totalItems={totalCompanies}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </Box>
  );
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CompanyProvider>
        <AppBar position="static" elevation={2}>
          <Toolbar>
            <BusinessIcon sx={{ mr: 2 }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Company Data Management System
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Container maxWidth="xl" sx={{ mt: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Companies Dashboard
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Explore and filter through our comprehensive company database
            </Typography>
          </Box>
          
          <CompanyDashboard />
        </Container>
      </CompanyProvider>
    </ThemeProvider>
  );
}

export default App;
