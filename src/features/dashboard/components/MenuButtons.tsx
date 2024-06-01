import { Button, Stack } from '@mui/material';
import { FC } from 'react';
import { MenuItemType } from '../types/MenuItemType';
import { useNavigate } from 'react-router-dom';

type Props = {
  menuItems: MenuItemType[];
};

/**
 * ダッシュボードのメニューに使用するボタン
 */
export const MenuButtons: FC<Props> = ({ menuItems }) => {
  const router = useNavigate();

  /**
   * ボタンクリック時の処理
   */
  const handleClickMenuButton = (pathParam: string): void => {
    router(pathParam);
  };

  return (
    <Stack direction="row" spacing={3} justifyContent="center" sx={{ width: '100%' }}>
      {menuItems.map(({ label, path, icon }) => (
        <Button
          key={label}
          onClick={() => handleClickMenuButton(path)}
          startIcon={icon}
          variant="contained"
          size="large"
          sx={{
            width: {
              xs: '100%',
              md: '20%',
            },
          }}
        >
          {label}
        </Button>
      ))}
    </Stack>
  );
};
