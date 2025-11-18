import React from 'react';
import {
  Box,
  CircularProgress,
  Typography,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  useTheme,
} from '@mui/material';

interface LoadingStateProps {
  type: 'initial' | 'table' | 'cards';
}

const LoadingState: React.FC<LoadingStateProps> = ({ type }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (type === 'initial') {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          gap: 2,
        }}
      >
        <CircularProgress size={48} />
        <Typography variant="h6" color="text.secondary">
          Loading companies...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Please wait while we fetch the latest company data
        </Typography>
      </Box>
    );
  }

  if (type === 'cards' || isMobile) {
    return (
      <Box>
        {Array.from({ length: 5 }).map((_, index) => (
          <Paper key={index} elevation={2} sx={{ mb: 2, p: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Skeleton variant="text" width="60%" height={32} />
              <Skeleton variant="rectangular" width={80} height={24} sx={{ borderRadius: 1 }} />
            </Box>
            <Skeleton variant="text" width="40%" height={20} />
            <Skeleton variant="text" width="50%" height={20} />
            <Skeleton variant="text" width="70%" height={20} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Skeleton variant="text" width="30%" height={20} />
              <Box sx={{ display: 'flex', gap: 1 }}>
                <Skeleton variant="circular" width={32} height={32} />
                <Skeleton variant="circular" width={32} height={32} />
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    );
  }

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><Skeleton variant="text" /></TableCell>
            <TableCell><Skeleton variant="text" /></TableCell>
            <TableCell><Skeleton variant="text" /></TableCell>
            <TableCell><Skeleton variant="text" /></TableCell>
            <TableCell><Skeleton variant="text" /></TableCell>
            <TableCell><Skeleton variant="text" /></TableCell>
            <TableCell><Skeleton variant="text" /></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.from({ length: 10 }).map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <Skeleton variant="text" width="80%" />
                <Skeleton variant="text" width="60%" />
              </TableCell>
              <TableCell><Skeleton variant="text" /></TableCell>
              <TableCell><Skeleton variant="text" /></TableCell>
              <TableCell><Skeleton variant="text" /></TableCell>
              <TableCell><Skeleton variant="text" /></TableCell>
              <TableCell>
                <Skeleton variant="rectangular" width={80} height={24} sx={{ borderRadius: 1 }} />
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Skeleton variant="circular" width={32} height={32} />
                  <Skeleton variant="circular" width={32} height={32} />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LoadingState;