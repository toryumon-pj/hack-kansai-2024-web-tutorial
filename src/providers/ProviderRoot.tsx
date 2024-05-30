import { FC, ReactNode } from 'react';
import { MUIProvider } from './MUIProvider';
import { SuspenseProvider } from './SuspenseProvider';

type Props = {
  children: ReactNode;
};

/**
 * ProviderをまとめるRoot
 */
export const ProviderRoot: FC<Props> = (props) => {
  return (
    <SuspenseProvider>
      <MUIProvider>{props.children}</MUIProvider>
    </SuspenseProvider>
  );
};
