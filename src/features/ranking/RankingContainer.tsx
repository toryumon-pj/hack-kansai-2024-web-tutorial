import { FC, useEffect, useState } from 'react';
import { LayoutContainer } from '../../components/LayoutContainer';
import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { RankingRow } from '@/types/dbExportTypes/RankingRow';
import { getRankingList } from './util/getRankingList';

/**
 * Ranking/Container
 */
export const RankingContainer: FC = () => {
  const [rankingList, setRankingList] = useState<RankingRow[]>([]);
  const [isFetchError, setIsFetchError] = useState<boolean>(false);

  /**
   * ランキングリストを取得する
   */
  useEffect(() => {
    (async () => {
      const fetchedRankingList = await getRankingList(20);
      if (!fetchedRankingList) {
        setIsFetchError(true);
        return;
      }
      setRankingList(fetchedRankingList);
    })();
  }, []);

  return (
    <LayoutContainer title="らんきんぐ">
      <Stack alignItems="center" spacing={3}>
        <Typography variant="h4">らんきんぐ 🏆</Typography>
        {isFetchError && (
          <Stack>
            <Typography>ランキングの取得に失敗しました</Typography>
            <Button onClick={() => window.location.reload()} variant="contained">
              リロード
            </Button>
          </Stack>
        )}
        <TableContainer
          sx={{
            height: '60vh',
            overflowY: 'auto',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ranking</TableCell>
                <TableCell>ニックネーム</TableCell>
                <TableCell>スコア</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rankingList.map((row, index) => (
                <TableRow key={row.score_id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.player_nickname}</TableCell>
                  <TableCell>{row.score}pt</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </LayoutContainer>
  );
};
