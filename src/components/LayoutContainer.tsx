import { Box, Container } from '@mui/material';
import { FC, ReactNode } from 'react';
import { Header } from './Header';

type Props = {
  children: ReactNode;
  title: string;
};

/**
 * 全体をラップするLayout
 */
export const LayoutContainer: FC<Props> = ({ children, title }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          height: '5dvh',
        }}
      >
        <Header title={title} />
      </Box>
      <Box
        sx={{
          height: '90dvh',
          bgcolor: 'primary.light',
          borderRadius: 10,
          p: 10,
        }}
      >
        {children}
      </Box>
    </Container>
  );
};
