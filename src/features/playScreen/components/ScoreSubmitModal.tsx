import { Box, Button, Modal, Stack, SxProps, TextField, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SA_TYPING_GAME_NICKNAME } from '../../../const/const';
import { upsertScoreByName } from '../util/upsertScoreByName';

const style: SxProps = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 10,
  p: { xs: 4, md: 6 },
  width: { xs: '100%', md: 'auto' },
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
  const [submitIsSuccess, setSubmitIsSuccess] = useState<boolean>(false);

  /**
   * スコアを登録する処理
   */
  const handleSubmitScore = (): void => {
    if (submitIsSuccess) {
      router('/ranking');
    }
    upsertScoreByName({ nickName, score });
    setSubmitIsSuccess(true);
    /**
     * ローカルストレージにニックネームを保存
     */
    localStorage.setItem(SA_TYPING_GAME_NICKNAME, nickName);

    setTimeout(() => {
      handleClose();
      router('/ranking');
    }, 3000);
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

  /**
   * ボタンのラベル
   */
  const buttonLabel = submitIsSuccess ? 'とうろくしました！' : 'ランキングにとうろく！';

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
            autoFocus
          />
          <Stack direction="row" justifyContent="center" spacing={3} sx={{ width: '100%' }}>
            {!submitIsSuccess ? (
              <Button
                onClick={handleClose}
                variant="outlined"
                size="large"
                sx={{ width: '50%', whiteSpace: 'nowrap' }}
              >
                キャンセル
              </Button>
            ) : null}
            <Button
              onClick={handleSubmitScore}
              disabled={isDisabledSubmitButton}
              variant="contained"
              size="large"
              sx={{ width: '50%', whiteSpace: 'nowrap' }}
            >
              {buttonLabel}
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
