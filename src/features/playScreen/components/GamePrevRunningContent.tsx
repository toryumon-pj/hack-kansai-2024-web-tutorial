import { Button, Stack, Typography } from '@mui/material';
import { GameInfoBox } from './GameInfoBox';
import { GameInfoBoxType } from '../types/GameInfoBoxType';
import { FC } from 'react';

type Props = {
  handleGameStartClick: () => void;
  gameInfoArray: GameInfoBoxType[];
};

/**
 * ゲーム開始前の画面のコンテンツ
 */
export const GamePrevRunningContent: FC<Props> = ({ handleGameStartClick, gameInfoArray }) => {
  return (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h5">ボタンをおしてゲームスタート！</Typography>
      <GameInfoBox infoArray={gameInfoArray} />
      <Button onClick={handleGameStartClick} variant="contained" size="large">
        Start Game !!
      </Button>
    </Stack>
  );
};
