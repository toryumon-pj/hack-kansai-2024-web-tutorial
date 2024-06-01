import { Box, Button, Modal, Stack, SxProps, TextField, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SA_TYPING_GAME_NICKNAME } from '../../../const/const';

const style: SxProps = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 10,
  p: 6,
  px: 8,
  borderRadius: 5,
};

type Props = {
  isModalOpen: boolean;
  score: number;
  handleClose: () => void;
};

/**
 * スコアを登録するModal
 */
export const ScoreSubmitModal: FC<Props> = ({ isModalOpen, score, handleClose }) => {
  const router = useNavigate();
  const [nickName, setNickName] = useState<string>('');

  /**
   * スコアを登録する処理
   */
  const handleSubmitScore = (): void => {
    /**
     * ローカルストレージにニックネームを保存
     */
    localStorage.setItem(SA_TYPING_GAME_NICKNAME, nickName);
    handleClose();
    router('/ranking');
  };

  /**
   * ニックネームをローカルストレージから取得
   */
  useEffect(() => {
    const nickName = localStorage.getItem(SA_TYPING_GAME_NICKNAME);
    if (nickName) setNickName(nickName);
  }, []);

  /**
   * ニックネームが空の場合はボタンを無効化
   */
  const isDisabledSubmitButton = nickName.trim().length === 0;

  return (
    <Modal open={isModalOpen} onClose={handleClose}>
      <Box sx={style}>
        <Stack spacing={4} alignItems="center">
          <Typography variant="h5">あなたのスコア:{score}pt</Typography>
          <TextField
            value={nickName}
            onChange={(e) => setNickName(e.target.value)}
            label="ニックネーム"
            variant="filled"
            fullWidth
          />
          <Stack direction="row" spacing={3}>
            <Button onClick={handleClose} variant="outlined" size="large">
              キャンセル
            </Button>
            <Button
              onClick={handleSubmitScore}
              disabled={isDisabledSubmitButton}
              variant="contained"
              size="large"
            >
              ランキングにとうろく！
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
