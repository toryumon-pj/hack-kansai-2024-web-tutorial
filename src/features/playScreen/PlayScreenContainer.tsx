import { Stack } from '@mui/material';
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { LayoutContainer } from '../../components/LayoutContainer';
import { GameInfoBoxType } from './types/GameInfoBoxType';
import { GameRunningContent } from './components/GameRunningContent';
import { GamePrevRunningContent } from './components/GamePrevRunningContent';
import { CONST_GAME_TIME } from '../../const/gameSetting';
import { getRandomWord } from './util/getRandomWord';

/**
 * PlayScreen/container
 */
export const PlayScreenContainer: FC = () => {
  const [currentWord, setCurrentWord] = useState<string>(getRandomWord(''));
  const [inputValue, setInputValue] = useState<string>('');
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(CONST_GAME_TIME);
  const [isGameRunning, setIsGameRunning] = useState<boolean>(false);
  const [isOpenSuccessSnackbar, setIsOpenSuccessSnackbar] = useState<boolean>(false);
  const timerRef = useRef<number>(0);

  /**
   * タイマーを勧める処理
   */
  useEffect(() => {
    if (isGameRunning && timeLeft > 0) {
      timerRef.current = window.setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return;
    }

    /**
     * ゲームが終了した場合の処理
     */
    if (timeLeft === 0) {
      setIsGameRunning(false);
      setTimeLeft(CONST_GAME_TIME);
      setInputValue('');
      setCurrentWord('');
      if (timerRef.current) clearTimeout(timerRef.current);
    }

    /**
     * クリーンアップ
     */
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isGameRunning, timeLeft]);

  /**
   * ゲームスタートボタンのハンドリング
   */
  const handleGameStartClick = (): void => {
    setIsGameRunning(true);
    setScore(0);
    setTimeLeft(CONST_GAME_TIME);
    setCurrentWord(getRandomWord(currentWord));
  };

  /**
   * ゲーム画面のInputのハンドリング
   * @param e inputEvent
   */
  const handleInputChange = ({
    target: { value: newValue },
  }: ChangeEvent<HTMLInputElement>): void => {
    /**
     * 入力欄のstateを更新する
     */
    setInputValue(newValue);

    /**
     * 入力された文字がcurrentWordの文字数の半分以上になったら、スナックバーを非表示にする
     */
    if (newValue.length >= currentWord.length / 2) {
      setIsOpenSuccessSnackbar(false);
    }

    /**
     * 入力された文字列が現在の単語と一致しているか判定して、一致していた場合はスコアを更新する
     */
    if (newValue.trim().toLowerCase() === currentWord.toLowerCase()) {
      setScore(score + 1);
      setInputValue('');
      setCurrentWord(getRandomWord(currentWord));

      /**
       * スナックバーを表示する
       */
      setIsOpenSuccessSnackbar(true);
      setTimeout(() => {
        setIsOpenSuccessSnackbar(false);
      }, 2000);
    }
  };

  const scoreLabel = score < 10 ? `0${score.toString()}pt` : `${score.toString()}pt`;
  const remainingTimeLabel = timeLeft < 10 ? `0${timeLeft.toString()}s` : `${timeLeft.toString()}s`;

  /**
   * スタート前画面に表示するスコアと制限時間の表示の配列
   */
  const gameInfoArray: GameInfoBoxType[] = [
    {
      label: 'まえのスコア',
      value: scoreLabel,
    },
    {
      label: 'Limit Time',
      value: remainingTimeLabel,
    },
  ];

  return (
    <LayoutContainer title="ぷれいがめん">
      <Stack justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
        {!isGameRunning ? (
          <GamePrevRunningContent
            handleGameStartClick={handleGameStartClick}
            gameInfoArray={gameInfoArray}
          />
        ) : (
          <GameRunningContent
            currentWord={currentWord}
            currentScore={scoreLabel}
            remainingTime={remainingTimeLabel}
            successSnackbarOpen={isOpenSuccessSnackbar}
            inputValue={inputValue}
            handleInputChange={handleInputChange}
          />
        )}
      </Stack>
    </LayoutContainer>
  );
};
