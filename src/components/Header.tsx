import { Button, Stack, Tooltip, Typography } from '@mui/material';
import { FC } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
};

/**
 * 画面上部のヘッダー
 */
export const Header: FC<Props> = ({ title }) => {
  const router = useNavigate();

  /**
   * 戻るボタンのハンドリング
   */
  const handleClickHomeButton = (): void => {
    router('/');
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        height: '100%',
        width: '100%',
      }}
    >
      <Tooltip title="ホーム">
        <Button onClick={handleClickHomeButton} variant="outlined">
          <HomeIcon />
        </Button>
      </Tooltip>
      <Typography variant="h6">{title}</Typography>
    </Stack>
  );
};
