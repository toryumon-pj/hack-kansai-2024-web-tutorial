import { Box, Stack, Typography } from '@mui/material';
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
    <Stack direction="row" sx={{ minWidth: '500px' }}>
      {infoArray.map(({ label, value }, index) => {
        const isFirstItem = index === 0;
        const isLastItem = index === infoArrayLength - 1;
        const borderRadius = (() => {
          if (isFirstItem) return '10px 0 0 10px';
          if (isLastItem) return '0 10px 10px 0';
          return 0;
        })();

        return (
          <Box
            key={label}
            sx={{
              p: 4,
              border: '0.5px solid',
              borderLeft: isLastItem ? 'none' : '0.5px solid',
              width: '80%',
              borderRadius,
            }}
          >
            <Typography variant="h6" sx={{ textAlign: 'center' }}>
              {label}
              <br />
              {value}
            </Typography>
          </Box>
        );
      })}
    </Stack>
  );
};
