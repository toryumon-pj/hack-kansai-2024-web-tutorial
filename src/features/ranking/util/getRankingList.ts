import { supabase } from '@/lib/supabase';
import { RankingRow } from '@/types/dbExportTypes/RankingRow';

/**
 * DBからランキングリストを取得する
 */
export const getRankingList = async (limit: number): Promise<RankingRow[] | null> => {
  const { data, error } = await supabase
    .from('game_scores_table')
    .select('*')
    .order('score', { ascending: false })
    .limit(limit);
  if (error) return null;
  return data;
};
