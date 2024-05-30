import { Button, Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * NotFound表示
 */
export const NotFoundPage: FC = () => {
  const router = useNavigate();

  /**
   * ダッシュボードに戻るボタンのハンドリング
   */
  const handleClickBackDashboard = (): void => {
    router('/');
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={6}
      sx={{ height: '100dvh', width: '100dvw' }}
    >
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        ページがないよ！
      </Typography>
      <Button onClick={handleClickBackDashboard} variant="contained">
        ダッシュボードにもどる
      </Button>
    </Stack>
  );
};
