import { ReactNode, Suspense } from 'react';
import { LoadingPage } from '../features/contentPages/LoadingPage';

type Props = {
  children: ReactNode;
};

/**
 * SuspenseのProvider
 */
export const SuspenseProvider = (props: Props) => {
  return <Suspense fallback={<LoadingPage />}>{props.children}</Suspense>;
};
