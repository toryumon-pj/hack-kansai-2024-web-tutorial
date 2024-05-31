import { Stack, Typography } from '@mui/material';
import { FC } from 'react';

type Props = {
  title: string;
};

/**
 * 画面上部のヘッダー
 */
export const Header: FC<Props> = ({ title }) => {
  return (
    <Stack
      sx={{
        height: '100%',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h6">{title}</Typography>
    </Stack>
  );
};
