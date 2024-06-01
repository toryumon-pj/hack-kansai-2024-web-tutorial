import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { LayoutContainer } from '../../components/LayoutContainer';
import { MenuItemType } from './types/MenuItemType';
import { MenuButtons } from './components/MenuButtons';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

/**
 * メニューのリスト
 */
const menuButtonArray: MenuItemType[] = [
  {
    label: 'プレイ',
    path: '/play-screen',
    icon: <VideogameAssetIcon />,
  },
  {
    label: 'ランキング',
    path: '/ranking',
    icon: <EmojiEventsIcon />,
  },
];

/**
 * Dashboard/container
 */
export const DashboardContainer: FC = () => {
  return (
    <LayoutContainer title="だっしゅぼーど">
      <Stack
        spacing={7}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h3">SaTyping</Typography>
        <MenuButtons menuItems={menuButtonArray} />
      </Stack>
    </LayoutContainer>
  );
};
