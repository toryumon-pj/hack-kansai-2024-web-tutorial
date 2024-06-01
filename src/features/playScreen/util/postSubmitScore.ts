import { supabase } from '../../../lib/supabase';

/**
 * スコアをPOSTする関数
 */
export const postSubmitScore = async ({
  nickName,
  score,
}: {
  nickName: string;
  score: number;
}): Promise<void> => {
  await supabase.from('game_scores_table').insert({
    player_name: nickName,
    score,
  });
};
