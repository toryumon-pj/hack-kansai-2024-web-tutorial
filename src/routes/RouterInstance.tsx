import { FC, ReactNode } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../features/dashboard/DashboardPage';
import { NotFoundPage } from '../features/etcPages/NotFoundPage';
import { RankingPage } from '../features/ranking/RankingPage';
import { PlayScreenPage } from '../features/playScreen/PlayScreenPage';

type RouteItemType = {
  path: string;
  element: ReactNode;
};

/**
 * ReactRouter
 */
export const RouterInstance: FC = () => {
  const routeArray: RouteItemType[] = [
    {
      path: '/',
      element: <DashboardPage />,
    },
    {
      path: '/play-screen',
      element: <PlayScreenPage />,
    },
    {
      path: '/ranking',
      element: <RankingPage />,
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routeArray.map((routeItem) => (
          <Route key={routeItem.path} path={routeItem.path} element={routeItem.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
