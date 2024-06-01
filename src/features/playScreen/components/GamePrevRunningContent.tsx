import { Button, Stack, Typography } from '@mui/material';
import { GameInfoBox } from './GameInfoBox';
import { GameInfoBoxType } from '../types/GameInfoBoxType';
import { FC } from 'react';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

type Props = {
  isNotFirstGame: boolean;
  gameInfoArray: GameInfoBoxType[];
  handleGameStartClick: () => void;
  handleSubmitScore: () => void;
};

/**
 * ゲーム開始前の画面のコンテンツ
 */
export const GamePrevRunningContent: FC<Props> = ({
  isNotFirstGame,
  gameInfoArray,
  handleGameStartClick,
  handleSubmitScore,
}) => {
  return (
    <Stack alignItems="center" spacing={4}>
      <Typography variant="h5">ボタンをおしてゲームスタート！</Typography>
      <GameInfoBox infoArray={gameInfoArray} />
      <Stack direction="row" spacing={3}>
        {isNotFirstGame ? (
          <Button
            onClick={handleSubmitScore}
            variant="outlined"
            size="large"
            startIcon={<EmojiEventsIcon />}
          >
            ランキングにとうろく
          </Button>
        ) : null}
        <Button
          onClick={handleGameStartClick}
          variant="contained"
          size="large"
          startIcon={<VideogameAssetIcon />}
        >
          Start Game !!
        </Button>
      </Stack>
    </Stack>
  );
};
