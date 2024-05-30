import { CircularProgress, Stack, Typography } from '@mui/material';
import { FC } from 'react';

/**
 * LoadingPage
 */
export const LoadingPage: FC = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={6}
      sx={{ height: '100dvh', width: '100dvw' }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        よみこみちゅう...
      </Typography>
      <CircularProgress color="primary" />
    </Stack>
  );
};
