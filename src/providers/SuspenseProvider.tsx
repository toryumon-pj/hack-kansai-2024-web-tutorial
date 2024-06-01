import { ReactNode, Suspense } from 'react';
import { LoadingPage } from '../features/etcPages/LoadingPage';

type Props = {
  children: ReactNode;
};

/**
 * SuspenseのProvider
 */
export const SuspenseProvider = (props: Props) => {
  return <Suspense fallback={<LoadingPage />}>{props.children}</Suspense>;
};
