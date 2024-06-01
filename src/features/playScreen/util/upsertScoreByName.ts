import { supabase } from '../../../lib/supabase';

/**
 * スコアをPOSTする関数
 */
export const upsertScoreByName = async ({
  nickName,
  score,
}: {
  nickName: string;
  score: number;
}): Promise<void> => {
  /**
   * もし'player_nickname'が重複していた場合はスコアを更新する
   */
  await supabase.from('game_scores_table').upsert(
    {
      player_nickname: nickName,
      score,
    },
    {
      onConflict: 'player_nickname',
    }
  );
};
