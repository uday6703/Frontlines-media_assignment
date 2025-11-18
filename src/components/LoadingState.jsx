import React from 'react';
import { Box, Skeleton, Card, CardContent } from '@mui/material';

const LoadingState = () => {
  return (
    <Box>
      <Box sx={{ mb: 4 }}>
        <Skeleton variant="text" width={300} height={60} />
        <Skeleton variant="text" width={500} height={30} />
      </Box>
      
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
            <Skeleton variant="rectangular" width={250} height={40} />
            <Skeleton variant="rectangular" width={150} height={40} />
            <Skeleton variant="rectangular" width={150} height={40} />
            <Skeleton variant="rectangular" width={120} height={40} />
          </Box>
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Skeleton variant="rectangular" width={250} height={60} />
            <Skeleton variant="rectangular" width={250} height={60} />
          </Box>
        </CardContent>
      </Card>

      <Box>
        {[1, 2, 3, 4, 5].map((index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Box sx={{ flex: 1 }}>
                  <Skeleton variant="text" width="60%" height={30} />
                  <Skeleton variant="text" width="40%" height={20} />
                </Box>
                <Skeleton variant="rectangular" width={80} height={25} />
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default LoadingState;