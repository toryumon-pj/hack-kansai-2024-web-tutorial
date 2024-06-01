import { Alert, Snackbar, Stack, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import { GameInfoBox } from './GameInfoBox';

type Props = {
  currentWord: string;
  currentScore: string;
  remainingTime: string;
  inputValue: string;
  successSnackbarOpen: boolean;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 * ゲーム動作中のコンテンツ
 */
export const GameRunningContent: FC<Props> = ({
  currentWord,
  currentScore,
  remainingTime,
  successSnackbarOpen,
  inputValue,
  handleInputChange,
}) => {
  const infoArray = [
    { label: 'いまのスコア', value: currentScore },
    { label: 'のこりじかん', value: remainingTime },
  ];

  return (
    <>
      <Stack alignItems="center" spacing={7}>
        <GameInfoBox infoArray={infoArray} />
        <Typography variant="h2">{currentWord}</Typography>
        <TextField
          value={inputValue}
          onChange={handleInputChange}
          variant="filled"
          size="medium"
          fullWidth
          autoFocus
        />
      </Stack>
      <Snackbar
        open={successSnackbarOpen}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert severity="success" variant="filled" sx={{ width: '100%' }}>
          せいかい！
        </Alert>
      </Snackbar>
    </>
  );
};
