import { TYPING_WORDS } from '../../../const/gameSetting';

/**
 * タイピングワードの中から、ランダムに1つを取得する
 */
export const getRandomWord = (prevWord: string): string => {
  const wordList = TYPING_WORDS.filter((word) => word !== prevWord);

  return wordList[Math.floor(Math.random() * wordList.length)];
};
