import { Stack, Typography } from '@mui/material';
import { FC } from 'react';
import { GameInfoBoxType } from '../types/GameInfoBoxType';

type Props = {
  infoArray: GameInfoBoxType[];
};

/**
 * ゲームの制限時間やスコアを表示するコンポーネント
 */
export const GameInfoBox: FC<Props> = ({ infoArray }) => {
  const infoArrayLength = infoArray.length;

  return (
    <Stack direction="row">
      {infoArray.map(({ label, value }, index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === infoArrayLength - 1;
        const borderRadius = (() => {
          if (isFirstItem) return '10px 0 0 10px';
          if (isLastItem) return '0 10px 10px 0';
          return 0;
        })();

        return (
          <Stack
            key={label}
            spacing={2}
            sx={{
              p: { xs: 4, md: 5 },
              border: '0.5px solid',
              borderLeft: isLastItem ? 'none' : '0.5px solid',
              width: '50%',
              borderRadius,
            }}
          >
            <Typography variant="h5" sx={{ textAlign: 'center', whiteSpace: 'nowrap' }}>
              {label}
            </Typography>
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {value}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
